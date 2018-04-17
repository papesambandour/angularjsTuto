var app = angular.module('MainApp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller : 'homeCtrl'
        })
        .when('/comment/:id',{
            templateUrl : 'views/comment.html',
            controller : 'postCtrl'
        })
        //.otherwise({redirectTo : '/'})
});

app.factory('homeFactory',function () {
    var factory ={
        posts : [
            {
                "id": 0,
                "name": "Geekol",
                "content": "Laboris ipsum tempor aliqua Lorem mollit ex sint ex ullamco nostrud voluptate ad. Lorem esse aliqua excepteur velit elit. Minim reprehenderit excepteur laboris enim sint Lorem veniam ad ipsum officia ex. Consequat adipisicing do commodo magna ad in ipsum nostrud eiusmod voluptate amet. Fugiat incididunt voluptate aute excepteur non cillum nisi non quis. Qui aliquip laborum dolore sit officia velit consectetur et ipsum pariatur esse commodo voluptate. Sit aute culpa incididunt culpa aliquip eiusmod eu pariatur ex adipisicing aliqua est duis. Id magna magna tempor sunt fugiat excepteur sint quis sit non quis in irure reprehenderit.",
                "comment": [
                    {
                        "username": "Aileen",
                        "content": "Aute pariatur deserunt enim consequat quis non aute consectetur nulla in laborum. Laboris consectetur elit pariatur Lorem do eu do pariatur ipsum anim. Fugiat nisi ullamco qui labore sunt esse et nisi excepteur aliquip quis. Occaecat commodo consequat minim sint amet cillum ad exercitation adipisicing laborum dolore voluptate culpa. Ea fugiat irure occaecat elit aliqua aliquip consectetur."
                    },
                    {
                        "username": "Lucy",
                        "content": "Esse fugiat ad id labore elit non. Irure nisi consectetur excepteur nisi dolore incididunt quis. Fugiat quis enim culpa laborum exercitation. Aliqua occaecat nostrud labore magna. Magna eiusmod ad culpa anim aute nulla velit ipsum magna fugiat incididunt et consequat."
                    },
                    {
                        "username": "Mcclain",
                        "content": "Do quis pariatur pariatur reprehenderit in ad. Exercitation exercitation nisi ut voluptate cupidatat deserunt magna in occaecat ex nulla excepteur. Anim ut deserunt proident exercitation et ea aute laboris consequat est sint. Consequat ullamco culpa mollit dolor aute ex. Reprehenderit ea sit qui aliquip elit ut magna."
                    }
                ]
            },
            {
                "id": 1,
                "name": "Iplax",
                "content": "Nostrud pariatur magna adipisicing laboris aliquip id fugiat ipsum culpa anim nulla. Nostrud do ea esse laborum esse dolor. Consectetur culpa velit magna nisi irure commodo irure. Ullamco velit eiusmod do tempor Lorem ipsum tempor esse. Consectetur id ea qui cillum minim aliqua sit ullamco do ut incididunt mollit nostrud. Fugiat est cupidatat eiusmod culpa magna incididunt qui amet pariatur irure ipsum. Officia commodo aliquip cillum nostrud dolore ea ex ex ullamco officia ea officia aute pariatur. Fugiat pariatur voluptate incididunt elit non sunt cupidatat tempor labore mollit minim amet excepteur.",
                "comment": [
                    {
                        "username": "Velma",
                        "content": "Veniam reprehenderit est deserunt qui voluptate duis occaecat do eu esse. Cupidatat excepteur non laborum commodo voluptate nisi. Ut ad est culpa qui. Deserunt aliqua occaecat amet ut. Do nulla id exercitation incididunt occaecat irure exercitation do cillum veniam aliqua."
                    },
                    {
                        "username": "Mallory",
                        "content": "Ut exercitation laborum occaecat officia non incididunt ullamco. Officia exercitation tempor ea cupidatat quis aute mollit ullamco dolore adipisicing incididunt. Do officia nisi dolore enim nostrud. Dolore dolore aute anim dolore fugiat culpa excepteur eiusmod. Proident ad tempor incididunt sit deserunt do irure pariatur cupidatat."
                    },
                    {
                        "username": "Farmer",
                        "content": "Exercitation officia proident qui et est adipisicing consectetur laborum culpa cupidatat aliquip non officia. Laboris id nisi ex quis labore et pariatur exercitation. Veniam non ad qui ea proident non occaecat nostrud eu amet. Ea aliqua nostrud esse officia sit ad cillum irure nisi. Qui laborum sunt aute id exercitation pariatur qui Lorem enim."
                    },
                    {
                        "username": "Hooper",
                        "content": "Officia aliquip amet dolore tempor ex. Labore elit dolor laborum eiusmod cupidatat sint irure veniam laborum cillum tempor mollit qui sunt. Do elit consectetur culpa et laborum id quis eiusmod cupidatat enim minim Lorem. Duis ea cillum occaecat exercitation occaecat veniam quis do pariatur dolor dolore. Duis eu do esse deserunt ea laboris proident eiusmod dolore commodo in eu."
                    }
                ]
            },
            {
                "id": 2,
                "name": "Avenetro",
                "content": "Occaecat esse aliquip proident est aute deserunt. Ipsum elit excepteur velit officia. Officia eu ut dolor nostrud quis. Laboris dolore magna dolor et laborum sunt. Occaecat elit eiusmod sit ut consequat ex sunt aliquip nostrud eiusmod amet non deserunt. Sunt laborum deserunt voluptate velit laboris. Amet laborum laboris dolore occaecat cillum. Dolor enim commodo amet culpa nisi laborum excepteur cillum esse est aute dolor aute.",
                "comment": [
                    {
                        "username": "Summer",
                        "content": "Ipsum pariatur exercitation duis labore enim exercitation. Enim ad cillum deserunt id adipisicing anim proident adipisicing fugiat proident nulla ea ipsum. Proident ullamco aute officia elit aliqua occaecat fugiat labore ipsum nulla. Eiusmod ipsum aliqua tempor nisi. Exercitation velit fugiat reprehenderit Lorem reprehenderit proident irure ex nisi aute ullamco occaecat reprehenderit."
                    },
                    {
                        "username": "Sampson",
                        "content": "Velit ad cupidatat ad quis irure anim excepteur eu amet magna fugiat et. Elit qui non et duis deserunt Lorem consectetur nostrud dolore velit irure elit dolor elit. In nostrud tempor reprehenderit nisi adipisicing et ea mollit cupidatat elit excepteur culpa dolore. Proident qui amet in laborum commodo magna ex enim velit duis. Occaecat velit labore voluptate aliqua."
                    },
                    {
                        "username": "Nettie",
                        "content": "Deserunt elit et laboris duis amet aliquip dolor. Amet qui excepteur sint ad do voluptate ea. Eiusmod ex ut magna elit labore consectetur adipisicing minim esse. Nostrud excepteur irure fugiat nisi labore cillum. Qui consequat nostrud tempor cupidatat culpa sunt cillum amet cupidatat aliqua eu."
                    },
                    {
                        "username": "Dunn",
                        "content": "Lorem fugiat exercitation anim excepteur aliquip ullamco. Sit aute laboris nostrud qui labore velit ex magna ullamco nostrud officia excepteur proident. Ullamco nisi quis adipisicing esse est. Occaecat laboris id aute eu ex. Ipsum minim fugiat dolor duis labore ex anim ut sunt."
                    }
                ]
            },
            {
                "id": 3,
                "name": "Melbacor",
                "content": "Proident commodo Lorem eiusmod eu amet aute elit incididunt qui adipisicing excepteur. Aute enim nulla adipisicing proident aliquip voluptate irure magna quis non deserunt. Aliquip commodo enim esse pariatur Lorem proident pariatur. In elit cupidatat ut culpa cupidatat ullamco et officia nostrud. Occaecat nulla tempor pariatur proident fugiat reprehenderit consectetur sint qui aute pariatur qui cillum. Laborum tempor cupidatat excepteur duis nostrud nostrud Lorem adipisicing. Consectetur excepteur sunt fugiat id est commodo officia sint et. Et eu aute voluptate ex ea.",
                "comment": [
                    {
                        "username": "Maxwell",
                        "content": "Veniam in ex cillum magna dolore excepteur culpa. Exercitation veniam deserunt amet anim laborum voluptate occaecat. Excepteur id aute in cillum elit voluptate. Eiusmod ad non tempor tempor consequat velit sint cillum qui laborum culpa amet. Ea ullamco laboris elit labore consectetur tempor in tempor aliquip Lorem et cupidatat mollit."
                    },
                    {
                        "username": "Cecilia",
                        "content": "Ex qui excepteur excepteur laborum dolor nostrud sint consequat quis occaecat adipisicing duis. Proident irure aliqua aute quis dolore in ut reprehenderit labore id tempor consequat sunt. Ut exercitation ipsum ut ea dolore consequat Lorem. Sunt ut culpa velit consectetur Lorem. Nostrud minim cillum tempor mollit id veniam non dolor."
                    },
                    {
                        "username": "Townsend",
                        "content": "Culpa aliqua ea sunt enim voluptate sint laborum consequat ullamco cupidatat. Aliquip laboris excepteur anim et qui eiusmod anim sunt nisi. Amet eiusmod fugiat ad duis sint pariatur commodo. Pariatur est culpa magna reprehenderit dolor sunt aute. Sint magna occaecat esse ipsum esse labore sunt aliquip dolor anim ad adipisicing aliqua aliqua."
                    },
                    {
                        "username": "Shelby",
                        "content": "Adipisicing labore Lorem laborum veniam anim magna elit. Occaecat est culpa enim esse exercitation consectetur dolore id ut velit eu aliquip mollit. Nulla quis ut sint ullamco eu. Ipsum sint nisi sint est anim duis commodo enim anim eiusmod laborum aute. Deserunt commodo ut aliquip Lorem."
                    },
                    {
                        "username": "Copeland",
                        "content": "Minim mollit nostrud non consectetur ex. Irure eiusmod incididunt aute eu adipisicing esse dolor esse ipsum aliqua. Culpa quis fugiat exercitation magna fugiat minim laborum Lorem in aliquip et consequat non excepteur. Cillum ullamco ad id minim labore nisi ipsum mollit incididunt fugiat anim consectetur ipsum. Eu ipsum ad tempor ullamco."
                    }
                ]
            },
            {
                "id": 4,
                "name": "Kaggle",
                "content": "Sint et commodo ad veniam labore. Nisi cillum elit laborum ut. Esse occaecat consectetur incididunt voluptate. Veniam officia non excepteur duis incididunt elit irure ipsum. Est ullamco ea dolor ea duis commodo magna sit nulla aliquip ex velit. Amet duis mollit sint irure aute elit commodo aliqua in in tempor non. Enim veniam mollit nostrud nulla ea. Fugiat quis enim aliqua proident fugiat magna nulla labore ut nostrud quis.",
                "comment": [
                    {
                        "username": "Darcy",
                        "content": "Esse tempor irure sit aute irure dolor dolor ad occaecat culpa non tempor duis. Magna nisi dolore anim irure anim sunt ullamco officia consequat tempor labore deserunt anim. Nisi exercitation officia labore laboris velit et ullamco dolor quis laborum commodo nostrud. Magna ex occaecat exercitation non ea id. Sit irure ex laborum ut culpa laborum nulla enim."
                    },
                    {
                        "username": "Chan",
                        "content": "Labore esse eiusmod nisi ex aliquip velit aliquip est tempor sunt quis minim do. Ullamco reprehenderit tempor dolor consectetur non dolore et adipisicing ea. Id amet labore ea ut nulla consequat enim amet eu. Irure nostrud officia consectetur duis nulla ea consequat adipisicing nostrud et consectetur. Eiusmod aute elit ipsum mollit est do adipisicing occaecat deserunt dolor dolore voluptate."
                    },
                    {
                        "username": "Barry",
                        "content": "Qui tempor anim est mollit sunt aute amet consequat. Duis adipisicing sint qui exercitation commodo sint consequat id mollit ea veniam eiusmod. Labore enim enim dolore pariatur magna mollit. Irure nulla laborum officia velit laborum labore amet proident officia dolor. Nisi sit quis aliqua mollit esse."
                    },
                    {
                        "username": "Harrell",
                        "content": "Deserunt laborum laboris sit nisi laboris eiusmod minim occaecat tempor laboris dolor nisi. Eu incididunt consectetur Lorem consequat et. Mollit anim pariatur occaecat nulla velit ullamco voluptate ex reprehenderit labore excepteur ea. Aliquip adipisicing eu proident labore. Do tempor sit ex aute velit adipisicing commodo."
                    },
                    {
                        "username": "Chase",
                        "content": "Laborum veniam veniam quis ad officia deserunt commodo. Occaecat aute minim pariatur reprehenderit consectetur sit dolor consequat aute tempor. Ea pariatur est nostrud labore cillum amet eu ut nisi non reprehenderit qui veniam laborum. Cupidatat cillum proident Lorem nostrud magna. Pariatur id irure adipisicing irure irure aliqua."
                    }
                ]
            },
            {
                "id": 5,
                "name": "Xleen",
                "content": "Consectetur voluptate ex in laboris do eu amet nulla tempor. Aute est ullamco incididunt fugiat adipisicing deserunt mollit cupidatat consequat exercitation. Nulla velit sint magna elit ea aliqua sit laboris dolore deserunt duis. Pariatur in aliquip ad commodo ad ea enim nisi cupidatat reprehenderit amet. Duis nulla pariatur officia consequat eiusmod excepteur commodo. Deserunt ullamco tempor ex consectetur amet occaecat do dolor commodo. Sint nostrud esse in quis ut amet elit elit in. Fugiat non tempor dolore aute elit enim ipsum.",
                "comment": [
                    {
                        "username": "Dillard",
                        "content": "Anim veniam excepteur sunt elit fugiat sint ullamco quis et. Sint do cupidatat cupidatat nisi do in aliquip sint tempor sint occaecat aliquip aute commodo. Dolore ipsum nostrud quis occaecat aliqua labore quis. Adipisicing eu enim minim est. Ut ipsum veniam consectetur nulla esse cupidatat aliqua quis excepteur mollit occaecat sunt."
                    },
                    {
                        "username": "Lane",
                        "content": "Velit et proident in do ullamco commodo ipsum id cillum eiusmod incididunt reprehenderit. Amet cillum aliqua ex duis do fugiat magna sint ad eiusmod dolore occaecat. Adipisicing enim adipisicing Lorem ex aliquip et nostrud nisi eiusmod id. Sit duis minim ut irure culpa consequat do aliquip. Nisi ut ad dolore sit id."
                    },
                    {
                        "username": "Buck",
                        "content": "Est nulla et ullamco cupidatat tempor anim commodo mollit culpa officia irure irure mollit elit. Excepteur sint elit deserunt culpa minim ipsum veniam pariatur sit. Cupidatat voluptate adipisicing ullamco cillum ea sunt enim duis in voluptate duis dolore. Eiusmod dolor officia laboris cillum Lorem amet. Proident do Lorem Lorem cillum cillum commodo consequat aliquip non elit cupidatat."
                    }
                ]
            }
        ],
        getPosts : function () {
            return factory.posts;
        },
        getPostById : function (id) {
            var returnPost = {} ;
            angular.forEach( factory.posts, function (value,key) {
                if(id == value.id)
                {
                    returnPost = value ;
                }
            });
            return returnPost ;
        }
    };
    return factory;
});
app.controller('homeCtrl',function ($scope,homeFactory,$routeParams) {
    $scope.posts = homeFactory.getPosts();
});
app.controller('postCtrl',function ($scope,homeFactory,$routeParams) {

    $scope.post = homeFactory.getPostById($routeParams.id);
});


