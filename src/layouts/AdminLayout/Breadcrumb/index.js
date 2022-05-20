import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import navigation from "../../../menu-items";
import { BASE_TITLE, BASENAME } from "../../../config/constant";

const Breadcrumb = () => {
    
    const [main, setMain] = useState([]);
    const [item, setItem] = useState([]);

    useEffect(() => {
        (navigation.items).map((item, index) => {
            if (item.type && item.type === 'group') {
                getCollapse(item, index);
            }
            return false;
        });
    });

    const getCollapse = (item, index) => {
        if (item.children) {
            (item.children).filter( collapse => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse, index);
                } else if (collapse.type && collapse.type === 'item') {
                    
                    if (document.location.pathname === BASENAME + collapse.url) {
                        if(document.location.pathname.includes('playerdetails')){
                            setMain(collapse.parentPage);
                        setItem(collapse);
                        }
                        else{
                            setMain(item);
                            setItem(collapse);
                        }
                        
                    }
                }
                return false;
            });
        }
    };

    let mainContent, itemContent;
    let breadcrumbContent = '';
    let title = '';
    let pageHeader = '';

    if (main && (main.type === 'collapse'|| main.isParent)) {
        mainContent = (
            <ListGroup.Item as='li' bsPrefix=' ' className="breadcrumb-item">
                <Link to={main.url}>{main.title}</Link>
            </ListGroup.Item>
        );
    }

    if (item && item.type === 'item') {
        title = item.title;
        pageHeader = item.pageHeader;
        itemContent = (
            <ListGroup.Item as='li' bsPrefix=' ' className="breadcrumb-item">
                <Link to='#'>{title}</Link>
            </ListGroup.Item>
        );
        if (item.breadcrumbs !== false) {
            breadcrumbContent = (
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">{pageHeader}</h5>
                                </div>
                                <ListGroup as='ul' bsPrefix=' ' className="breadcrumb">
                                    <ListGroup.Item as='li' bsPrefix=' ' className="breadcrumb-item">
                                        <Link to="/"><i className="feather icon-home"/></Link>
                                    </ListGroup.Item>
                                    {mainContent}
                                    {itemContent}
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        document.title = title + BASE_TITLE;

    }

    return (
        <React.Fragment>
            {breadcrumbContent}
        </React.Fragment>
    )
};

export default Breadcrumb;
