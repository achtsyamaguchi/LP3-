$(function() { 
  $(document).ready(function(){
    setTimeout(function(){ $('.loading').toggleClass('loader_slide')}, 5000);
    });

    //クリック時のアコーディオン開閉
    $('.title').on('click', function() {//タイトル要素をクリックしたら
      $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
        
      let findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
        
      if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去    
      }else{//それ以外は
        $('.close').removeClass('close'); //クラス名closeを全て除去した後
        $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
        $(findElm).slideDown(500);//アコーディオンを開く
      }
      
    });
    
    
    

    //すむーすすくろーる
      // #で始まるリンクをクリックしたら。。
      $('a[href^="#"]').click(function() {
        // スクロールの速度
        let speed = 400;
        // スクロールタイプ
        let type = 'swing';
        // href属性の取得
        let href= $(this).attr("href");
        let buffer = 100;
        // 移動先の取得（hrefが#indexならトップ$(html)に）
        let target = $(href == "#index" ? 'html' : href);
        // 移動先の位置取得
        let position = target.offset().top -buffer;
        // animateでスムーススクロール
        $('body,html').animate({scrollTop:position}, speed, type);
        return false;
      });

      //下から上に表示？
      $(window).on('scroll', function() {
        let setHeight = 100;
        let wHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        $('.section_box , .about_list').each(function() {
          let targetPosition = $(this).offset().top;
          if(scrollTop > targetPosition - wHeight + setHeight) {
            $(this).addClass('show');
            
          }
        })
      });
      
      $('.ham').on('click',function () {
        $('.line').toggleClass('active'),
        $('.header_nav').toggleClass('show');

        $('.header_nav_ul_li a').on('click',function () {
          $('.line').removeClass('active')//×が三本線に戻る
          $('.header_nav').removeClass('show');
        })
      })

    });

    



  function end_loader() {
    $('.loading_txt').fadeOut(600);
  }
  $(window).on('load', function() {
    setTimeout(function () {
      end_loader();
    }, 1500)
  });

  
  
  
  





    
  
    


