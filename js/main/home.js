if (window.matchMedia("(min-width: 991px)").matches) {
$('#js-banner-carrousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true
  }); 
}


if (window.matchMedia("(max-width: 992px)").matches) {
  $('#js-banner-carrousel-mobile').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true
  }); 
}

// aqui detectamos o clique do usúario no botão de cada produto, para então abrirmos o modal de compra dentro do produto
const productItem = document.querySelectorAll('.product-list figure');
if(productItem){
  productItem.forEach((item) => {
    let contentBox = item.querySelector('.content-box');
    let openDetails = item.querySelector('.open-details');
    let closeDetails = item.querySelector('.close-detail');
    openDetails.addEventListener('click', () => {
      contentBox.classList.toggle('active');
    });
    closeDetails.addEventListener('click', () => {
      contentBox.classList.toggle('active');
    })
  })
} 

// aqui detectamos quando o usuario comprar um produto, então o mesmo será adicionado ao carrinho, como não temos uma trativa correta no HTML, então precisamos diferenciar algumas coisas no desktop e mobile
if (window.matchMedia("(max-width: 991px)").matches) {
  var btnBuy = document.querySelectorAll('.btn-buy');
  btnBuy.forEach((btn) => {
    const addCart = document.querySelector('.item__card_add');
    const incrementCart = document.querySelector('.content__card__qtd');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      addCart.classList.add('active');
      incrementCart.textContent ++
      setTimeout(() => {
        addCart.classList.remove('active');
      }, 3000)
    })
  })
} else {
  var btnBuy = document.querySelectorAll('.btn-buy');
  btnBuy.forEach((btn) => {
    const addCart = document.querySelector('.item__card_add');
    const incrementCart = document.querySelector('.content__card__qtd-desk');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      addCart.classList.add('active');
      incrementCart.textContent ++
      setTimeout(() => {
        addCart.classList.remove('active');
      }, 3000)
    })
  })
}

$('#js-carrousel-products').slick({
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
}); 

$('#js-carrousel-products2').slick({
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
}); 

if (window.matchMedia("(min-width: 991px)").matches) {
  $('#js-opinion-desktop').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    }); 
  }
  
  
  if (window.matchMedia("(max-width: 992px)").matches) {
    $('#js-opinion-mobile').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      mobileFirst: true
    }); 
  }

  //  faixa comunicado
 $('#js-range-carrousel').slick({
  autoplay: true,
  arrows: false,
  dots: false,
  infinite: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,

  responsive: [
    {
      breakpoint: 992,
      settings: "unslick"
    }
  ]
});

const newsletter = document.querySelector('.newsletter');
const inputName = newsletter.querySelector('input[name="nome"]');
const inputEmail = newsletter.querySelector('input[name="email"]');
const newsletterBtn = newsletter.querySelector('.btn-search');
const modalNewsletter = newsletter.querySelector('.modal-registration');
const modalRegistration = newsletter.querySelector('.modal-registration__status');
const titleModal = newsletter.querySelector('.modal-registration__title');
const textModal = newsletter.querySelector('.modal-registration__text');
if(newsletter) {
  newsletterBtn.addEventListener('click', () => {
  modalNewsletter.classList.toggle('active');
    if(inputName.value == "" || inputEmail.value == "") {
      modalRegistration.classList.add('error');
      modalNewsletter.classList.add('error');
      titleModal.textContent = 'Algo deu errado'
      textModal.textContent = 'Algo deu errado, verifique se você digitou corretamente, ou se já está registrado em nossa newsletter'
      setTimeout(() => {
        modalNewsletter.classList.remove('active');
        modalRegistration.classList.remove('error');
        modalNewsletter.classList.remove('error');
      }, 2500)
    } if( inputEmail.value.indexOf('@')==-1 || inputEmail.value.indexOf('.')==-1 ) {
      modalRegistration.classList.add('error');
      modalNewsletter.classList.add('error');
      titleModal.textContent = 'E-mail inválido'
      textModal.textContent = 'Algo deu errado, verifique se você digitou corretamente, ou se já está registrado em nossa newsletter'
      setTimeout(() => {
        modalNewsletter.classList.remove('active');
        modalRegistration.classList.remove('error');
        modalNewsletter.classList.remove('error');
      }, 2500)
    } else {
      modalRegistration.classList.add('sucess');
      modalNewsletter.classList.add('sucess');
      titleModal.textContent = 'Sucesso'
      textModal.textContent = 'Obrigado por se cadastrat em nossa newsletter, em breve você receberá nossas melhores ofertase promoções exclusivas.'
      setTimeout(() => {
        modalNewsletter.classList.remove('active');
        modalRegistration.classList.remove('sucess');
        modalNewsletter.classList.remove('sucess');
      }, 2500)
    }
  })
}

if (window.matchMedia("(min-width: 991px)").matches) {
  const bannerDesk = document.querySelector('.banner-video-desktop');
  const iconYotube = bannerDesk.querySelector('.youtube');
  const videoYoutube = document.querySelector('.video_overlay');
  const closeVideo = videoYoutube.querySelector('.close-video');
  if(bannerDesk && iconYotube && videoYoutube) {
    iconYotube.addEventListener('click', () => {
      videoYoutube.classList.add('active');
    });
    closeVideo.addEventListener('click', () => {
      videoYoutube.classList.remove('active');
    })
  }
}

if (window.matchMedia("(max-width: 991px)").matches) {
  const bannerMobile = document.querySelector('.banner-video-mobile');
  const iconYotube = bannerMobile.querySelector('.youtube');
  const videoYoutube = document.querySelector('.video_overlay');
  const closeVideo = videoYoutube.querySelector('.close-video');
  if(bannerMobile && iconYotube && videoYoutube) {
    iconYotube.addEventListener('click', () => {
      videoYoutube.classList.add('active');
    });
    closeVideo.addEventListener('click', () => {
      videoYoutube.classList.remove('active');
    })
  }
}
