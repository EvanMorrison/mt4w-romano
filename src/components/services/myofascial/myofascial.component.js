module.exports = function(app) {
  app
    .component('myofascial', {
      template: require('../singleService.template.html'),
      controller: [ 
                    MyofascialController
      ],
      controllerAs: 'vm'
    })

    function MyofascialController () {
      const vm = this;
      
      vm.pageContent = {
          pageHeading: 'Myofascial Release',
          bodyText: [
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur porro est dolores totam recusandae harum ab veritatis, excepturi praesentium dolorum perferendis qui sunt at quia blanditiis ad odit reiciendis repellat repellendus impedit officia fugit suscipit, illum nulla. Nemo, quasi ab minus reprehenderit eligendi numquam, perferendis magnam nam tempora debitis illum ducimus qui ratione, earum sit, repellendus veniam ea ipsum at est accusamus sapiente reiciendis ex? Reiciendis vel nostrum earum eum in atque velit, obcaecati dolore!",
              "Culpa voluptatibus, corrupti perferendis aliquam velit nesciunt amet laboriosam omnis, quibusdam nostrum ullam asperiores maxime incidunt aliquid natus, cumque porro sed sapiente! Eius in suscipit nobis sit ratione minus quaerat, eveniet reiciendis beatae laborum laboriosam repudiandae saepe facere non quia cum quae impedit error aspernatur excepturi ad quis. Exercitationem fuga dolore vero, veniam iste libero magni, obcaecati, quas quibusdam itaque rem. Ab possimus nihil eligendi, sunt corporis magnam beatae quidem iusto officia, excepturi, neque facilis.",
              "Accusantium dolor itaque excepturi a nihil molestiae possimus animi at ipsa magnam officia esse incidunt, dolore facilis obcaecati maiores adipisci! Nesciunt quaerat aliquam ad tempore consequuntur aspernatur quisquam laborum, deleniti optio doloribus fuga porro, ratione nihil minus nulla quo placeat temporibus aperiam animi repellat culpa molestiae. A, maiores, culpa. Unde enim iusto dolor eaque ea eligendi rem laboriosam consequuntur, quos perferendis voluptates minus ipsum error fugiat consequatur vel sint magnam autem quam repellendus, odio blanditiis.",
              "Error odit quis laboriosam repellendus corrupti nihil fugiat impedit, iste nulla alias maiores qui vero unde neque ipsum assumenda pariatur magni maxime. Doloremque aspernatur unde dolor consequuntur omnis aut assumenda ea sequi, quas iusto hic explicabo provident beatae itaque, ratione deserunt nemo dolores repellendus, necessitatibus quisquam porro. Repellendus est dolore recusandae similique animi laudantium magni sed commodi incidunt assumenda illo mollitia delectus doloremque minima placeat, molestiae, velit ratione aperiam nesciunt aliquam soluta. Nostrum, sed, quia."
        ]
        }
    }
}