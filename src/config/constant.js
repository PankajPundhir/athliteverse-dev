export const BASENAME = ''; // don't add '/' at end off BASENAME
export const BASE_URL = '/app';
export const BASE_TITLE = ' - Merchant Back Office';
export const GraphQL_API = process.env.REACT_APP_GraphQL_API;

//#region Get Player List
export const Get_Player = `query getdata {
    player_players {
      id
      merchant_id
      updated_at
      created_at
      aasm_state
      wager_status {
        aasm_state
      }
      merchant_reference
    }
  }` ;
//#endregion

//#endregion Get Player by PlayerID
export const Get_PlayerBy_PlayerId = `query getdata($id:String) {
  search_playersbyid(args: {search: $id}) {
    id
    merchant_reference
    aasm_state
    reason_for_state
    created_at
    wager_status {
      aasm_state
    }
    updated_at
  }
}` ;
//#endregion

//#region  Get Player Details By PlayerId
export const Get_PlayerDetailsBy_Id = `query getdata($playerId:String) {
    player_players(where: {id: {_eq: $playerId}}) {
      id
      aasm_state
      wager_status {
        aasm_state
      }
      updated_at
      created_at
      merchant_reference
      reason_for_state
       total_spent {
      final_cost_cents
    }
    }
  }` ;
//#endregion

//#region  Get Order List by PlayerId
export const Get_Player_Order = `query getdata($id:String) {
      store_orders(where: {player_id: {_ilike: $id}}) {
        id
        credit_amount: ordered_credits_cents
        status: aasm_state
        updated_at
        merchant_reference
    }
  }` ;
//#endregion

//#region Get Token Wallet List by PlayerId
export const Get_TokenWallets_ByPlayer = `query getdata($id:String){
    get_tokenwalletbyplayerid(args: {search: $id}) {
      name
      prize_balance
      status
      token_wallet_id
      credit_balance
      player_id
      merchant_reference
      created_at
      type_code
    }
  }` ;
//#endregion

//#region  Get List of Order Delivered by tokenWalletId
export const Get_OrderDelivered_ByTokenWalletId = `query getdata ($playerid:String, $tokenwalletid:String) {
   store_orders(where: {player_id: {_ilike: $playerid}, _and: {token_wallet_id: {_ilike: $tokenwalletid}}}) {
     aasm_state
     created_at
     delivered_credits_cents
     prize_money_cents
     id
     token_wallet_id
     player_id
     }
    }`;
//#endregion

//#region GetGamePlay Token Details By token walletID
export const Get_GamePlayTokens_ByTokenWalletId = `query MyQuery($tokenwalletid:uuid) {
      delayed_reveal_tokens(where: {token_wallet_id: {_eq: $tokenwalletid}}) {
        token_wallet_id
        id
        merchant_reference
        reserved_prize_cents
        aasm_state
        reserved_description
        credit_cents
        revealed_prize_cents
        revealed_description
        revealed_at
      }
    }`;
//#endregion

//#region GetOrderDetailsByWalletId
export const Get_OrderDetails_ByOrderId = `query getdata ($orderid:uuid) {
          store_orders(where: {id: {_eq: $orderid}}) {
          aasm_state
          created_at
          delivered_credits_cents
          prize_money_cents
          id
          token_wallet_id
          player_id
          merchant_reference
          final_cost_cents
          ordered_cost_cents
          ordered_credits_cents
          refunded_cents
          player_location_latitude
          player_location_longitude
          player_location_postal_code
          player_location_state_id
         }
        }`
//#endregion

export const CONFIG = {
  layout: 'vertical', // vertical, horizontal
  subLayout: '', // null, layout-2, layout-2-2, layout-3, layout-4, layout-4-2, layout-6, layout-8
  collapseMenu: false, // mini-menu
  layoutType: 'menu-dark', // menu-dark, menu-light, dark
  navIconColor: false,
  headerBackColor: 'header-dark', // header-default, header-blue, header-red, header-purple, header-lightblue, header-dark
  navBackColor: 'navbar-default', // navbar-default, navbar-blue, navbar-red, navbar-purple, navbar-lightblue, navbar-dark
  navBrandColor: 'brand-default', // brand-default, brand-blue, brand-red, brand-purple, brand-lightblue, brand-dark
  navBackImage: false, // false, navbar-image-1, navbar-image-2, navbar-image-3, navbar-image-4, navbar-image-5
  rtlLayout: false,
  navFixedLayout: true, // only for vertical layouts
  headerFixedLayout: true, // only for vertical layouts
  boxLayout: false,
  navDropdownIcon: 'style1', // style1, style2, style3
  navListIcon: 'style1', // style1, style2, style3, style4, style5, style6
  navActiveListColor: 'active-default', // active-default, active-blue, active-red, active-purple, active-lightblue, active-dark
  navListTitleColor: 'title-default', // title-default, title-blue, title-red, title-purple, title-lightblue, title-dark
  navListTitleHide: false,
  configBlock: true,
  layout6Background: 'linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)', // used only for pre-layout = layout-6
  layout6BackSize: '', // 'auto' - for background pattern, 'cover' - for background images & used only for pre-layout = layout-6
  jwt: {
    secret: 'SECRET-KEY',
    timeout: '1 days'
  },
  firebase: {
    apiKey: "AIzaSyC9m6rMXs8PKHkJaT761AupFQdmcjQDwSY",
    authDomain: "gradient-able-react-hook.firebaseapp.com",
    projectId: "gradient-able-react-hook",
    storageBucket: "gradient-able-react-hook.appspot.com",
    messagingSenderId: "787384589233",
    appId: "1:787384589233:web:2b57c391ac41d2d1967b90",
    measurementId: "G-1D6ER7YWLL"
  },
  auth0: {
    client_id: 'CkaKvwheIhIQkybjTEQwN7ikcdHObsPh',
    domain: 'dev-w0-vxep3.us.auth0.com'
  }
};

