import * as resource from '../src/config/resource';
const menuItems = {
    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: resource.MenuItems.Menu_Dashboard_Title,
                    pageHeader: resource.MenuItems.Menu_Dashboard_PageHeader,
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/app'
                },
                {
                    id: 'players',
                    title: resource.MenuItems.Menu_Players_Title,
                    pageHeader: resource.MenuItems.Menu_Players_Title,
                    type: 'item',
                    icon: 'feather icon-layers',
                    url: '/app/players'
                },
                {
                    id: 'orders',
                    title: resource.MenuItems.Menu_Orders_Title,
                    pageHeader: resource.MenuItems.Menu_Orders_PageHeader,
                    type: 'item',
                    icon: 'feather icon-file-text',
                    url: '/app/orders'
                },
                {
                    id: 'playersdetails',
                    title: resource.MenuItems.Menu_PlayersDetails_Title,
                    pageHeader: resource.MenuItems.Menu_PlayersDetail_PageHeader,
                    type: 'item',
                    icon: '',
                    url: '/app/playerdetails',
                    parentPage: {
                        id: 'players',
                        title: resource.MenuItems.Menu_Players_Title,
                        pageHeader: resource.MenuItems.Menu_Players_Title,
                        type: 'item',
                        icon: 'feather icon-layers',
                        url: '/app/players',
                        isParent: true,
                    }
                },
            ]
        }
    ]
};

export default menuItems;
