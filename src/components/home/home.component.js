module.exports = function(HomeModule) {
  HomeModule
    .component('home', {
      template: require('./home.template.html'),
      controller: [HomeController],
      controllerAs: 'vm'
    });

    function HomeController() {
      var vm = this;

      vm.heroCards = {
        card1: {
          title: "massage",
          subtitle: "relief for muscles",
          bodyText: "Learn more about the types of massage available",
          imgUrl: require("../../assets/bodywork/body-back-1.jpg"),
          state: 'massage'
        },
        card2: {
          title: "manual lymphatic drainage",
          subtitle: "correcting restricted circulation",
          bodyText: "Learn whether MLD can help you.",
          imgUrl: require("../../assets/bodywork/body-back-2.jpg"),
          state: 'lymphatic'
        },
        card3: {
          title: "myofascial release",
          subtitle: "stretch therapy for joints and connective tissue",
          bodyText: "Find out how myofascial release can make you feel fabulous",
          imgUrl: require("../../assets/bodywork/body-back-3.jpg"),
          state: 'myofascial'
        }
      }

      vm.title = 'Manual Therapy for Wellness'
      vm.provider = {
        name: 'Trish Romano',
        email: 'trish@manualtherapy4wellness.com',
        tel: '310-283-9382',
        address1: '9458 E Ironwood Square Dr, Suite 102',
        address2: 'Scottsdale, AZ 85255'
      }
      
    }

}
