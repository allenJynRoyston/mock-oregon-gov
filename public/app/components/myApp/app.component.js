"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var semantic_ui_directive_1 = require('../../directives/semantic-ui-ALL/semantic-ui.directive');
var AppComponent = (function () {
    function AppComponent() {
        //----------------------------
        this._public = {
            isMobile: _root.globals.isMobile,
            navBar: [
                {
                    title: "Home",
                    dropdown: [
                        { title: "Job Seekers" },
                        { title: "Employers" },
                        { title: "Employees" },
                        { title: "State Employment" },
                        { title: "Training" },
                        { title: "Unemployment" }
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        { title: "Find a Job" },
                        { title: "Worksource Oregon" },
                        { title: "File for Unemployment" }
                    ]
                },
                {
                    title: "Business",
                    dropdown: [
                        { title: "Registrations" },
                        { title: "Permits & Licenses" },
                        { title: "Employers" },
                        { title: "State Employment" },
                        { title: "Financing" },
                        { title: "Taxes" }
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        { title: "Startup Toolkit" },
                        { title: "Am I Compliant" },
                        { title: "Contracting With Oregon" },
                        { title: "Training & Events" }
                    ]
                },
                {
                    title: "Government",
                    dropdown: [
                        { title: "Governor Brown" },
                        { title: "State Government" },
                        { title: "Tribal government" },
                        { title: "Local Government" },
                        { title: "About Oregon" },
                        { title: "State Employees" }
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        { title: "Register to Vote in Oregon" },
                        { title: "Oregon Electd Officials" },
                        { title: "Oregon Legislative Information System" },
                        { title: "Find your Legislators" }
                    ]
                }, {
                    title: "Education",
                    dropdown: [
                        { title: "News" },
                        { title: "Events" },
                        { title: "Birth - 12 Grade" },
                        { title: "Colleges & Universities" },
                        { title: "Career & Trade Schools" },
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        { title: "Search Education Standards" },
                        { title: "Common Core Resources" },
                        { title: "School & District Report Cards" },
                        { title: "Ask a Librarian from the State Library" },
                        { title: "Education & Career Prep Search" }
                    ]
                }, {
                    title: "Courts",
                    dropdown: [
                        { title: "Find and File Cases" },
                        { title: "Fees & Payments" },
                        { title: "Count Information" },
                        { title: "Prison & Inmates" },
                        { title: "Family Law" },
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        { title: "File a Court Case" },
                        { title: "Find an Offender" },
                        { title: "Report a Hate Crime" },
                        { title: "Sex Offender Inquiry System" },
                    ]
                }
            ],
            footer: [
                {
                    title: "At Your Service",
                    links: [
                        { title: "Help", icon: "" },
                        { title: "Feedback", icon: "" },
                        { title: "Maps", icon: "" },
                        { title: "Veterans Outreach", icon: "" }
                    ]
                },
                {
                    title: "Elected Officials",
                    links: [
                        { title: "Governor" },
                        { title: "Legislature" },
                        { title: "Secretary of State" },
                        { title: "Treasurer" },
                        { title: "Attorney General" },
                        { title: "Labor Commisioner" },
                    ]
                },
                {
                    title: "Alerts",
                    links: [
                        { title: "Amber Alerts" },
                        { title: "Missing Children" },
                        { title: "Road & Weather" },
                        { title: "Conditions" }
                    ]
                },
                {
                    title: "Directories",
                    links: [
                        { title: "Agency A-Z List" },
                        { title: "Open Data" },
                        { title: "State Phone Book" },
                        { title: "State Employee" },
                        { title: "Search" },
                        { title: "Building Closure" },
                        { title: "Notices" },
                    ]
                },
                {
                    title: "Policies",
                    links: [
                        { title: "Accessibility" },
                        { title: "Privacy Policy" },
                        { title: "File Formats" },
                        { title: "Supported Browsers" }
                    ]
                }
            ],
            mainMenu: [
                { title: "Top Services", icon: "fa fa-diamond", scrollTo: "#id-top-services" },
                { title: "Maps", icon: "fa fa-map", scrollTo: "#id-maps" },
                { title: "Features", icon: "fa fa-cog", scrollTo: "#id-features" },
                { title: "Payments", icon: "fa fa-credit-card-alt", scrollTo: "#id-payments" },
                { title: "Licenses", icon: "fa fa-file-text", scrollTo: "#id-licenses" },
                { title: "Drivers", icon: "fa fa-taxi", scrollTo: "#id-drivers" },
                { title: "#MyOregon", icon: "fa fa-instagram", scrollTo: "#id-myOregon" }
            ],
            features: [
                { title: "Woman veterans, we want to hear from you!", meta: "ODVA invites women with prior military service to share their experience accessing healthcare, mental health services in Oregon.", image: "assets/images/feature1.jpg", stars: 7 },
                { title: "Sustainable Innovation", meta: "Lane County partnership tries alternative payment model for behavioral and medical care.", image: "assets/images/feature2.png", stars: 5 },
                { title: "Department of Enviromental Quality awarded grant", meta: "DEQ awarded grant for pollution prevention from EPA to benefit Oregon business.", image: "assets/images/feature3.png", stars: 7 },
                { title: "ODOE helps Oregon farm go solar.", meta: "Oregon Department of Energy grant program supports renewable energy at Turner's Santiam Valley Ranch.", image: "assets/images/feature4.png", stars: 3 },
                { title: "Fighting wars to fighting fires", meta: "Through the federal government's Firefighter Property Program, converted military vehicles are aiding fire departments.", image: "assets/images/feature5.jpg", stars: 5 },
            ],
            subFooter: [
                { title: "Site Map" },
                { title: "Contact us" },
                { title: "Terms and Conditions" },
                { title: "Privacy Policy" },
            ],
            payments: {
                business: [
                    { title: "Alcohol Service Permit Application" },
                    { title: "Business Tax Forms" },
                    { title: "Construction Contractors Board Contractor Forms" },
                    { title: "Division of Finance and Corporate Securities Applications, Forms and Reports" },
                    { title: "File a Complaint Against a Finance or Securities" }
                ],
                courts: [
                    { title: "Child Support Forms" },
                    { title: "Tax Court Forms" },
                    { title: "Appellate Court Forms" },
                    { title: "Family Law Forms" },
                    { title: "Circuit Court and Statewide Forms" },
                ],
                licensing: [
                    { title: "Oregon State Board of Geological Examiners Applications" },
                    { title: "Landscape Architect Applications" },
                    { title: "Landscape Architect Board Forms" },
                    { title: "Address Change Form for Chiropractic Licensees" },
                    { title: "Driver and Motor Vehicle Services" }
                ],
                taxes: [
                    { title: "40 full-year resident" },
                    { title: "40N nonresident" },
                    { title: "40P part-year resident" },
                    { title: "Withholding tax reconciliation" }
                ]
            },
            licenses: {
                dmv: [
                    { title: "Driver Licenses, Permits and ID Cards" },
                    { title: "Commercial Driver Licenses, Permits and Endorsements" },
                    { title: "Vehicle License Plates, Title and Tags" }
                ],
                forms: [
                    { title: "Department of Public Safety Standards and Training Private Security/Investigator Forms" },
                    { title: "Department of Public Safety Standards and Training Criminal Justice Forms" },
                    { title: "Department of Public Safety Standards and Training Fire Department Personnel Forms" },
                    { title: "Physical Therapy Applications for Licensure" },
                    { title: "DMV Change of Address" },
                ],
                business: [
                    { title: "Construction Contractors Board Licensing Information" },
                    { title: "Oregon Building Codes Division" },
                    { title: "Vehicle Dealers and Dismantlers" },
                    { title: "Department of Agriculture Licensing Information" },
                    { title: "Liquor Licensing" }
                ],
                recreation: [
                    { title: "Fireworks Program" },
                    { title: "Hunter Reporting" },
                    { title: "Department of Fish and Wildlife Online License Sales" },
                    { title: "Aircraft/Pilot Registration and Licensing Forms" },
                    { title: "Special Event Liquor Licenses" }
                ]
            },
            drivers: {
                forms: [
                    { title: "Application for Title and Registration" },
                    { title: "Application for Replacement Title Form" },
                    { title: "Application for Registration, Renewal, Replacement, or Transfer of Plates and/or Stickers Form" },
                    { title: "Notice of Sale or Transfer of a Vehicle Form" },
                    { title: "Driver License Application Form" },
                    { title: "DMV Forms and Publications" }
                ],
                recreation: [
                    { title: "All-Terrain Vehicle Safety Training" },
                    { title: "Order State Maps" },
                    { title: "Check Road Conditions" }
                ],
                information: [
                    { title: "Practice tests: Sample Oregon Driver License Test" },
                    { title: "All-Terrain Vehicle Safety Training" },
                    { title: "Ask the Department of Transportation" },
                    { title: "Traffic Crash Statistics" },
                    { title: "Dial a Ride and Intrastate Bus Service" },
                    { title: "Department of Motor Vehicles Home Page" },
                ],
                travel: [
                    { title: "Child Safety Seat Information" },
                    { title: "Order State Maps" },
                    { title: "Check Road Conditions" },
                    { title: "TripCheck Twitter Feeds" }
                ]
            },
            myOregon: [
                { title: "Downtown 1", image: "http://lorempixel.com/400/400/city/1", credit: "Mike Tyson" },
                { title: "Downtown 2", image: "http://lorempixel.com/400/400/city/2", credit: "Little Mac" },
                { title: "Downtown 3", image: "http://lorempixel.com/400/400/city/3", credit: "Bald Bull" },
                { title: "Nature 1", image: "http://lorempixel.com/400/400/nature/1", credit: "King Hippo" },
                { title: "Nature 2", image: "http://lorempixel.com/400/400/nature/2", credit: "Madclown" },
                { title: "Nature 3", image: "http://lorempixel.com/400/400/nature/3", credit: "Mr Dream" },
                { title: "Food 1", image: "http://lorempixel.com/400/400/food/1", credit: "The Sandman" },
                { title: "Food 2", image: "http://lorempixel.com/400/400/food/2", credit: "Glass Joe" },
                { title: "Food 3", image: "http://lorempixel.com/400/400/food/3", credit: "Donkey Kong" },
            ],
            content: [
                { title: "Find Jobs", meta: "Apply for state jobs in Oregon." },
                { title: "Unemployment Claims", meta: "Apply for an unemployment claim." },
                { title: "TripCheck", meta: "Make a plan for your trip to Oregon!" },
                { title: "Register To Vote", meta: "Register to vote in local and state elections." },
                { title: "Pay Taxes", meta: "Make or schedule a tax payment here." },
            ]
        };
        this.modalImage = {};
    }
    //----------------------------
    //----------------------------
    AppComponent.prototype.setModalImage = function (imageData) {
        var t = this;
        t.modalImage = imageData;
    };
    //----------------------------
    //----------------------------
    AppComponent.prototype.scrollTo = function (location) {
        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 500);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/components/myApp/layout.html',
            directives: [
                semantic_ui_directive_1.uiSemanticRating,
                semantic_ui_directive_1.uiSemanticDimmer,
                semantic_ui_directive_1.uiSemanticDimmerButton,
                semantic_ui_directive_1.uiSemanticModal,
                semantic_ui_directive_1.uiSemanticModalAction,
                semantic_ui_directive_1.uiSemanticSidebar,
                semantic_ui_directive_1.uiSemanticAccordian,
                semantic_ui_directive_1.uiSemanticCheckbox,
                semantic_ui_directive_1.uiSemanticDropdown,
                semantic_ui_directive_1.uiSemanticEmbed,
                semantic_ui_directive_1.uiSemanticPopup,
                semantic_ui_directive_1.uiSemanticProgress,
                semantic_ui_directive_1.uiSemanticProgressButton,
                semantic_ui_directive_1.uiSemanticTab,
                semantic_ui_directive_1.uiSemanticTransitionOnload,
                semantic_ui_directive_1.uiSemanticTransitionButton,
                semantic_ui_directive_1.uiSemanticTransitionHover,
                semantic_ui_directive_1.uiSemanticVisibility
            ],
            styles: ["\n\n\n        .bg-green{\n            background-color: #344032!important;\n        }\n\n        .footer{\n            z-index: 50!important;\n        }\n        #body-content{\n            z-index: 20\n        }\n\n        #home-main-menu{\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: auto;\n            height: 100%;\n            padding-top: 90px;\n            padding-left: 30px;\n            z-index: 10;\n        }\n\n        #help-bar{\n            position: fixed;\n            top: 0;\n            right: 0;\n            width: 200px;\n            height: 120px;\n            z-index: 100;\n        }\n\n        .help-bar-input{\n            position: absolute;\n            bottom: 0px;\n            right: 10px\n        }\n\n        #image-viewer{\n            min-height: 500px!important;\n        }\n\n        .hide{\n            display: none;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map