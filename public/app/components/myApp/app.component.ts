import {Component} from '@angular/core';
import {uiSemanticRating} from '../../directives/semantic-ui-rating/rating.directive';
import {uiSemanticDimmer} from '../../directives/semantic-ui-dimmer/dimmer.directive'
import {uiSemanticDimmerButton} from '../../directives/semantic-ui-dimmer/dimmer.directive';
import {uiSemanticModal} from '../../directives/semantic-ui-modal/modal.directive'
import {uiSemanticSidebar} from '../../directives/semantic-ui-sidebar/sidebar.directive'

declare var location:{};
declare var $:any;

@Component({
    selector: 'my-app',
    templateUrl: './app/components/myApp/layout.html',
    directives:[
        uiSemanticRating,
        uiSemanticDimmer,
        uiSemanticDimmerButton,
        uiSemanticModal,
        uiSemanticSidebar
    ],
    styles: [`


        .bg-green{
            background-color: #344032!important;
        }

        .footer{
            z-index: 50!important;
        }
        #body-content{
            z-index: 20
        }

        #home-main-menu{
            position: fixed;
            top: 0;
            left: 0;
            width: auto;
            height: 100%;
            padding-top: 90px;
            padding-left: 30px;
            z-index: 10;
        }

        #help-bar{
            position: fixed;
            top: 0;
            right: 0;
            width: 200px;
            height: 120px;
            z-index: 100;
        }

        .help-bar-input{
            position: absolute;
            bottom: 0px;
            right: 10px
        }

        #image-viewer{
            margin-top: -300px!important;
        }


    `]
})
export class AppComponent {

    //----------------------------
    public _public = {
            navBar:[
                {
                    title: "Home",
                    dropdown: [
                        {title: "Job Seekers"},
                        {title: "Employers"},
                        {title: "Employees"},
                        {title: "State Employment"},
                        {title: "Training"},
                        {title: "Unemployment"}
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        {title: "Find a Job"},
                        {title: "Worksource Oregon"},
                        {title: "File for Unemployment"}
                    ]
                },
                {
                    title: "Business",
                    dropdown: [
                        {title: "Registrations"},
                        {title: "Permits & Licenses"},
                        {title: "Employers"},
                        {title: "State Employment"},
                        {title: "Financing"},
                        {title: "Taxes"}
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        {title: "Startup Toolkit"},
                        {title: "Am I Compliant"},
                        {title: "Contracting With Oregon"},
                        {title: "Training & Events"}
                    ]
                },
                {
                    title: "Government",
                    dropdown: [
                        {title: "Governor Brown"},
                        {title: "State Government"},
                        {title: "Tribal government"},
                        {title: "Local Government"},
                        {title: "About Oregon"},
                        {title: "State Employees"}
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        {title: "Register to Vote in Oregon"},
                        {title: "Oregon Electd Officials"},
                        {title: "Oregon Legislative Information System"},
                        {title: "Find your Legislators"}
                    ]
                },{
                    title: "Education",
                    dropdown: [
                        {title: "News"},
                        {title: "Events"},
                        {title: "Birth - 12 Grade"},
                        {title: "Colleges & Universities"},
                        {title: "Career & Trade Schools"},
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        {title: "Search Education Standards"},
                        {title: "Common Core Resources"},
                        {title: "School & District Report Cards"},
                        {title: "Ask a Librarian from the State Library"},
                        {title: "Education & Career Prep Search"}
                    ]
                },{
                    title: "Courts",
                    dropdown: [
                        {title: "Find and File Cases"},
                        {title: "Fees & Payments"},
                        {title: "Count Information"},
                        {title: "Prison & Inmates"},
                        {title: "Family Law"},
                    ],
                    subTitle: "Featured Services",
                    subDropdown: [
                        {title: "File a Court Case"},
                        {title: "Find an Offender"},
                        {title: "Report a Hate Crime"},
                        {title: "Sex Offender Inquiry System"},
                    ]
                }
        ],
        footer:[
                {
                    title: "At Your Service",
                    links:[
                        {title: "Help", icon: ""},
                        {title: "Feedback", icon: ""},
                        {title: "Maps", icon: ""},
                        {title: "Veterans Outreach", icon: ""}
                    ]
                },
                {
                    title: "Elected Officials",
                    links:[
                        {title: "Governor"},
                        {title: "Legislature"},
                        {title: "Secretary of State"},
                        {title: "Treasurer"},
                        {title: "Attorney General"},
                        {title: "Labor Commisioner"},
                    ]
                },
                {
                    title: "Alerts",
                    links:[
                        {title: "Amber Alerts"},
                        {title: "Missing Children"},
                        {title: "Road & Weather"},
                        {title: "Conditions"}
                    ]
                },
                {
                    title: "Directories",
                    links:[
                        {title: "Agency A-Z List"},
                        {title: "Open Data"},
                        {title: "State Phone Book"},
                        {title: "State Employee"},
                        {title: "Search"},
                        {title: "Building Closure"},
                        {title: "Notices"},
                    ]
                },
                {
                    title: "Policies",
                    links:[
                        {title: "Accessibility"},
                        {title: "Privacy Policy"},
                        {title: "File Formats"},
                        {title: "Supported Browsers"}
                    ]
                }
        ],
        mainMenu:[
                {title: "Top Services", icon: "fa fa-diamond", scrollTo: "#id-top-services"},
                {title: "Maps", icon: "fa fa-map", scrollTo: "#id-maps"},
                {title: "Features", icon: "fa fa-cog", scrollTo: "#id-features"},
                {title: "Payments", icon: "fa fa-credit-card-alt", scrollTo: "#id-payments"},
                {title: "Licenses", icon: "fa fa-file-text", scrollTo: "#id-licenses"},
                {title: "Drivers", icon: "fa fa-taxi", scrollTo: "#id-drivers"},
                {title: "#MyOregon", icon: "fa fa-instagram", scrollTo: "#id-myOregon"}
        ],

        features:[
                {title: "Woman veterans, we want to hear from you!", meta: "ODVA invites women with prior military service to share their experience accessing healthcare, mental health services in Oregon.", image: "assets/images/feature1.jpg", stars: 7},
                {title: "Sustainable Innovation", meta: "Lane County partnership tries alternative payment model for behavioral and medical care.", image: "assets/images/feature2.png", stars: 5},
                {title: "Department of Enviromental Quality awarded grant", meta: "DEQ awarded grant for pollution prevention from EPA to benefit Oregon business.", image: "assets/images/feature3.png", stars: 7},
                {title: "ODOE helps Oregon farm go solar.", meta: "Oregon Department of Energy grant program supports renewable energy at Turner's Santiam Valley Ranch.", image: "assets/images/feature4.png", stars: 3},
                {title: "Fighting wars to fighting fires", meta: "Through the federal government's Firefighter Property Program, converted military vehicles are aiding fire departments.", image: "assets/images/feature5.jpg", stars: 5},
        ],

        subFooter:[
            {title: "Site Map"},
            {title: "Contact us"},
            {title: "Terms and Conditions"},
            {title: "Privacy Policy"},
        ],

        payments:{
            business:[
                {title: "Alcohol Service Permit Application"},
                {title: "Business Tax Forms"},
                {title: "Construction Contractors Board Contractor Forms"},
                {title: "Division of Finance and Corporate Securities Applications, Forms and Reports"},
                {title: "File a Complaint Against a Finance or Securities"}
            ],
            courts: [
                {title: "Child Support Forms"},
                {title: "Tax Court Forms"},
                {title: "Appellate Court Forms"},
                {title: "Family Law Forms"},
                {title: "Circuit Court and Statewide Forms"},
            ],
            licensing:[
                {title: "Oregon State Board of Geological Examiners Applications"},
                {title: "Landscape Architect Applications"},
                {title: "Landscape Architect Board Forms"},
                {title: "Address Change Form for Chiropractic Licensees"},
                {title: "Driver and Motor Vehicle Services"}
            ],
            taxes:[
                {title: "40 full-year resident"},
                {title: "40N nonresident"},
                {title: "40P part-year resident"},
                {title: "Withholding tax reconciliation"}
            ]
        },

        licenses:{
            dmv:[
                {title: "Driver Licenses, Permits and ID Cards"},
                {title: "Commercial Driver Licenses, Permits and Endorsements"},
                {title: "Vehicle License Plates, Title and Tags"}
            ],
            forms: [
                {title: "Department of Public Safety Standards and Training Private Security/Investigator Forms"},
                {title: "Department of Public Safety Standards and Training Criminal Justice Forms"},
                {title: "Department of Public Safety Standards and Training Fire Department Personnel Forms"},
                {title: "Physical Therapy Applications for Licensure"},
                {title: "DMV Change of Address"},
            ],
            business:[
                {title: "Construction Contractors Board Licensing Information"},
                {title: "Oregon Building Codes Division"},
                {title: "Vehicle Dealers and Dismantlers"},
                {title: "Department of Agriculture Licensing Information"},
                {title: "Liquor Licensing"}
            ],
            recreation:[
                {title: "Fireworks Program"},
                {title: "Hunter Reporting"},
                {title: "Department of Fish and Wildlife Online License Sales"},
                {title: "Aircraft/Pilot Registration and Licensing Forms"},
                {title: "Special Event Liquor Licenses"}
            ]
        },

        drivers:{
            forms:[
                {title: "Application for Title and Registration"},
                {title: "Application for Replacement Title Form"},
                {title: "Application for Registration, Renewal, Replacement, or Transfer of Plates and/or Stickers Form"},
                {title: "Notice of Sale or Transfer of a Vehicle Form"},
                {title: "Driver License Application Form"},
                {title: "DMV Forms and Publications"}
            ],
            recreation: [
                {title: "All-Terrain Vehicle Safety Training"},
                {title: "Order State Maps"},
                {title: "Check Road Conditions"}
            ],
            information:[
                {title: "Practice tests: Sample Oregon Driver License Test"},
                {title: "All-Terrain Vehicle Safety Training"},
                {title: "Ask the Department of Transportation"},
                {title: "Traffic Crash Statistics"},
                {title: "Dial a Ride and Intrastate Bus Service"},
                {title: "Department of Motor Vehicles Home Page"},
            ],
            travel:[
                {title: "Child Safety Seat Information"},
                {title: "Order State Maps"},
                {title: "Check Road Conditions"},
                {title: "TripCheck Twitter Feeds"}
            ]
        },

        myOregon:[
            {title: "Downtown 1", image: "https://lorempixel.com/400/400/city/1", credit: "Mike Tyson"},
            {title: "Downtown 2", image: "https://lorempixel.com/400/400/city/2", credit: "Little Mac"},
            {title: "Downtown 3", image: "https://lorempixel.com/400/400/city/3", credit: "Bald Bull"},
            {title: "Nature 1", image: "https://lorempixel.com/400/400/nature/1", credit: "King Hippo"},
            {title: "Nature 2", image: "https://lorempixel.com/400/400/nature/2", credit: "Madclown"},
            {title: "Nature 3", image: "https://lorempixel.com/400/400/nature/3", credit: "Mr Dream"},
            {title: "Food 1", image: "https://lorempixel.com/400/400/food/1", credit: "The Sandman"},
            {title: "Food 2", image: "https://lorempixel.com/400/400/food/2", credit: "Glass Joe"},
            {title: "Food 3", image: "https://lorempixel.com/400/400/food/3", credit: "Donkey Kong"},
        ],



        content:[
            {title: "Find Jobs", meta: "Apply for state jobs in Oregon."},
            {title: "Unemployment Claims", meta: "Apply for an unemployment claim."},
            {title: "TripCheck", meta: "Make a plan for your trip to Oregon!"},
            {title: "Register To Vote", meta: "Register to vote in local and state elections."},
            {title: "Pay Taxes", meta: "Make or schedule a tax payment here."},
        ]

    }

    public modalImage = {}
    //----------------------------

    //----------------------------
    setModalImage(imageData:any){
        var t = this;
            t.modalImage = imageData
    }
    //----------------------------

    //----------------------------
    scrollTo(location:string){
        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 500);
    }
    //----------------------------

}
