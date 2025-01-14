import React from "react";
import ReactDOM from "react-dom/client"
//Making a Food Ordering App;
//First we will create an App level component inside which other components will be added.
const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
//Creating a Header Component which be inserted inside AppLayout Component;
const Header=()=>{
  return(
    <div className="header">
      <div className="logo">
      <img src="data:image/png;base64,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"></img>
     </div>
     <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us!</li>
        <li>Wishlist</li>
        <li>Cart</li>
      </ul>
     </div>
    </div>
  )
}
//Creating a Body Component;
const Body=()=>{
  return(
    <div className="body">
      <div className="search">SEARCH BAR</div>
      <div className="rest-cards">
        <Rest1 resData={resObject}/>
      </div>
    </div>
  )
}
//component of individual restaurent card;
const Rest1=(props)=>{
  const{resData}=props;
  return(
    <div className="rest1">
      <div className="img1">
        <img src=""></img>
      </div>
       <h2>{resData.info.name}</h2>
       <h3>{resData.info.costForTwo}</h3>
       <h3>{resData.info.avgRating}</h3> 
    </div>
  )
}
//production data is stored as Js Object; 
const resObject={
  "info": {
                      "id": "148023",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/21e250f5-27a1-4d97-a836-4c3c623852fd_148023.jpg",
                      "locality": "Thapa Colony",
                      "areaName": "Haldwani Locality",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-14 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹175 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-dedcc206-2aa7-407c-85f0-c1f05a839414"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/haldwani/pizza-hut-thapa-colony-haldwani-locality-rest148023",
                      "type": "WEBLINK"
                                  }
      }
                






















const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)