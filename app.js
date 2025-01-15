import React from "react";
import ReactDOM from "react-dom/client"
//Food Ordering App having Header Body Footer as components;
//App-level Component;
const AppLayout=()=>{
  return(
    <div className="App">
      <Header/>
      <Body/>
    </div>
  )
}
//Creating a Header Component;
const Header=()=>{
  return(
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1QQ6Jp3Vzu9XmbxRF8RE3EKEqUdBHn8hLg&s"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Deals of the Day</li>
          <li>Whislist</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
//Body Component
const Body=()=>{
  return(
    <div className="body">
      <div className="search">SEARCH</div>
      <div className="rest-cards">
        <Rest1 resData={resList[0]}/>
        <Rest1 resData={resList[1]}/>
        <Rest1 resData={resList[2]}/>
        <Rest1 resData={resList[3]}/>
      </div>
    </div>
  )
}
//Since all the cards are same at structural level therefore we can make separate functional component for it and simply call inside the <Body>;
const Rest1=(props)=>{
  const{resData}=props;
  
  return(
    <div className="rest1">
      <div className="img1">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
      </div>
      <h1>{resData.info.name}</h1>
      <h2>{resData.info.cuisines.join()}</h2>
      <h3>{resData.info.costForTwo}</h3>
      <h4>{resData.info.avgRating}</h4>
    </div>
  )
}
//What if we want to take the data from backend servers;we take array of restaurent data.
const resList=[{"info": {
                      "id": "489981",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "tpieyesjh9qpoa2lv0g2",
                      "locality": "Nainital Road",
                      "areaName": "Haldwani Locality",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "4961",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.6K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-15 23:59:00",
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
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹349",
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
                      "context": "seo-data-0302c84d-c698-48be-8c10-66d4a1fd2607"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/haldwani/la-pinoz-pizza-nainital-road-haldwani-locality-rest489981",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "654486",
                      "name": "Rollsking",
                      "cloudinaryImageId": "bd9f6ecc9245080c1a3b654e22b6789f",
                      "locality": "Nainital Road",
                      "areaName": "Haldwani City",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Fast Food",
                        "Rolls & Wraps",
                        "North Indian",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "parentId": "4697",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "490",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 6.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "6.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-15 23:00:00",
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
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹120"
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
                      "context": "seo-data-0302c84d-c698-48be-8c10-66d4a1fd2607"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/haldwani/rollsking-nainital-road-haldwani-city-rest654486",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "243258",
                      "name": "Bikanervala",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/a3de5f0a-675c-458a-bc9c-850382266b81_243258.jpg",
                      "locality": "Saras Market Road",
                      "areaName": "Haldwani Locality",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese",
                        "North Indian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "45936",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.0K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-15 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
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
                      "context": "seo-data-0302c84d-c698-48be-8c10-66d4a1fd2607"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/haldwani/bikanervala-saras-market-road-haldwani-locality-rest243258",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "601118",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                      "locality": "Walk Way Mall",
                      "areaName": "Haldwani Locality",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "101",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 9.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "9.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-15 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
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
                      "context": "seo-data-0302c84d-c698-48be-8c10-66d4a1fd2607"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/haldwani/baskin-robbins-ice-cream-desserts-walk-way-mall-haldwani-locality-rest601118",
                      "type": "WEBLINK"
                    }
                  }]
  
 
                                         
  
//This is basically a Javascript Object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)