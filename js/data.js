// Partneriai
function getPartners() {
  return [
    {
      website: "https://ignitis.lt/lt",
      logo: "img/partners/ignitis.jpg",
      title: "Ignitis grupė"
    },
    {
      website: "https://www.mailerlite.com/",
      logo: "img/partners/mailerlite.jpg",
      title: "MailerLite"
    },
    {
      website: "https://tesonet.com",
      logo: "img/partners/tesonet.jpg",
      title: "Tesonet"
    },
    {
      website: "https://unity.com/",
      logo: "img/partners/unity.jpg",
      title: "Unity"
    },
    {
      website: "https://www.cornercasetech.com/",
      logo: "img/partners/cornercase.jpg",
      title: "Corner Case"
    },
    {
      website: "https://www.kevin.eu/",
      logo: "img/partners/kevin.jpg",
      title: "kevin."
    },
    {
      website: "https://www.retalgroup.com/",
      logo: "img/partners/retal.jpg",
      title: "RETAL"
    },
    {
      website: "https://treenex.com/",
      logo: "img/partners/treenex.jpg",
      title: "Treenex"
    },
    {
      website: "https://tutotoons.com/",
      logo: "img/partners/tutotoons.jpg",
      title: "TutoTOONS"
    },
    {
      website: "https://www.adeoweb.lt/",
      logo: "img/partners/adeoweb.jpg",
      title: "Adeo Web"
    },
    {
      website: "https://site.adform.com/",
      logo: "img/partners/adform.jpg",
      title: "Adform"
    },
    {
      website: "https://bloommo.lt/",
      logo: "img/partners/bloommo.jpg",
      title: "bLoommo"
    },
    {
      website: "https://www.expertmedia.lt/",
      logo: "img/partners/expertmedia.jpg",
      title: "Expertmedia"
    },
    {
      website: "https://www.outokumpu.com/en",
      logo: "img/partners/outokumpu.jpg",
      title: "Outokumpu"
    },
    {
      website: "https://www.pixelmator.com/team/",
      logo: "img/partners/pixelmatorteam.jpg",
      title: "Pixelmator Team"
    },
    {
      website: "https://www.vinted.com/",
      logo: "img/partners/vinted.jpg",
      title: "Vinted"
    },
    {
      website: "https://zyro.com/lt",
      logo: "img/partners/zyro.jpg",
      title: "Zyro"
    },
    {
      website: "https://prestapro.lt/",
      logo: "img/partners/prestapro.jpg",
      title: "PrestaPro"
    },
    {
      website: "https://www.strongpoint.com/lt/",
      logo: "img/partners/strongpoint.jpg",
      title: "StrongPoint"
    },
    {
      website: "https://telesoftas.com/",
      logo: "img/partners/telesoftas.jpg",
      title: "TeleSoftas"
    },
    {
      website: "https://www.orca.lt/",
      logo: "img/partners/orca.jpg",
      title: "ORCA TEAM"
    }
  ]
}

// Atsiliepimai
function getFeedbacks(lang) {
  let data =
  {
    en: [
      {
        photo: "img/feedback/kajus.jpg",
        name: "Kajus Kilbukas",
        position: "IT systems administrator",
        text: "Everything works great"
      },
      {
        photo: "img/feedback/rasa.jpg",
        name: "Rasa Ridikaitė",
        position: "Chief",
        text: "No interuptions"
      },
      {
        photo: "img/feedback/klemas.jpg",
        name: "Klemas Kalpokas",
        position: "Programming enthusiast",
        text: "Quality at an affordable price"
      }, {
        photo: "img/feedback/onute.jpg",
        name: "Onutė Pakalnutė",
        position: "Product owner",
        text: "This supplier can be trusted"
      },
      {
        photo: "img/feedback/darius.jpg",
        name: "Darius Raudonikis",
        position: "Programmer",
        text: "It’s fun to deal with serious suppliers"
      },
      {
        photo: "img/feedback/maryte.jpg",
        name: "Marytė Šnekutė",
        position: "IT specialist",
        text: "Everything has been running smoothly for many years"
      }
    ],
    lt: [
      {
        photo: "img/feedback/kajus.jpg",
        name: "Kajus Kilbukas",
        position: "IT sistemų administratorius",
        text: "Viskas veikia puikiai"
      },
      {
        photo: "img/feedback/rasa.jpg",
        name: "Rasa Ridikaitė",
        position: "Vadovė",
        text: "Jokių trigdžių"
      },
      {
        photo: "img/feedback/klemas.jpg",
        name: "Klemas Kalpokas",
        position: "Progamavimo entuziastas",
        text: "Kokybė už prieinamą kainą"
      }, {
        photo: "img/feedback/onute.jpg",
        name: "Onutė Pakalnutė",
        position: "Produkto savininkė",
        text: "Šiuo tiekėju galima pasitikėti"
      },
      {
        photo: "img/feedback/darius.jpg",
        name: "Darius Raudonikis",
        position: "Progamuotojas",
        text: "Smagu turėti reikalų su rimtais tiekėjais"
      },
      {
        photo: "img/feedback/maryte.jpg",
        name: "Marytė Šnekutė",
        position: "IT specialistė",
        text: "Viskas sklandžiai jau nemažai metų"
      }
    ]
  }

  return data[lang];

}

//Atsiliepimu ikelimas
function loadFeedBack(language) {
  let feedbacks = getFeedbacks(language);

  let htmlFeedbacks = "";

  for (let index = 0; index < feedbacks.length; index++) {
    const feedback = feedbacks[index];
    let template = '<div class="mySlides fade"> <div class="feedback colorThree-background"> <div class="feedback-image-container"> <img src="{{photo}}" alt=""> </div><div class="feedback-info"> <div class="feedback-info-div"></div><h1 class="feedback-name colorOne">{{name}}</h1> <h2 class="feedback-position colorOne">{{position}}</h2> <p class="feedback-text">{{text}}</p></div></div></div>';
    template = template.replace('{{photo}}', feedback.photo)
    template = template.replace('{{name}}', feedback.name)
    template = template.replace('{{position}}', feedback.position)
    template = template.replace('{{text}}', feedback.text)
    document.querySelector(".feedbaks").innerHTML = template;
    htmlFeedbacks += template;
  }

  document.querySelector(".feedbaks").innerHTML = htmlFeedbacks;

  return feedbacks;
}

