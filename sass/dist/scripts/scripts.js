$(function(){$(".accordion__item").on("click",".accordion-link:not(.active)",function(o){o.preventDefault(),$(".accordion-link").removeClass("active"),$(".accordion-panel").slideUp(400).removeClass("show"),$(this).addClass("active"),$(this).next(".accordion-panel").slideDown(400).addClass("show")})}),$(function(){$(".main-carousel").flickity({wrapAround:!0,autoPlay:!0,imagesLoaded:!0,prevNextButtons:!1,pauseAutoPlayOnHover:!1})}),$(function(){$("body").append('<a href="#" class="to-top-btn">to Top</a>'),$(window).scroll(function(){$(window).scrollTop()>400?$(".to-top-btn").fadeIn("slow"):$(".to-top-btn").fadeOut("slow")}),$(".to-top-btn").click(function(){return $("html, body").animate({scrollTop:0},700),!1})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsInNsaWRlci5qcyIsInRvVG9wLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsInRoaXMiLCJhZGRDbGFzcyIsIm5leHQiLCJzbGlkZURvd24iLCJmbGlja2l0eSIsIndyYXBBcm91bmQiLCJhdXRvUGxheSIsImltYWdlc0xvYWRlZCIsInByZXZOZXh0QnV0dG9ucyIsInBhdXNlQXV0b1BsYXlPbkhvdmVyIiwiYXBwZW5kIiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiZmFkZU91dCIsImNsaWNrIiwiYW5pbWF0ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUEsV0FFQUEsRUFBQSxvQkFBQUMsR0FBQSxRQUFBLCtCQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGlCQUNBSCxFQUFBLG1CQUFBSSxZQUFBLFVBQ0FKLEVBQUEsb0JBQUFLLFFBQUEsS0FBQUQsWUFBQSxRQUNBSixFQUFBTSxNQUFBQyxTQUFBLFVBQ0FQLEVBQUFNLE1BQUFFLEtBQUEsb0JBQUFDLFVBQUEsS0FBQUYsU0FBQSxZQ1BBUCxFQUFBLFdBQ0FBLEVBQUEsa0JBQUFVLFVBQ0FDLFlBQUEsRUFDQUMsVUFBQSxFQUNBQyxjQUFBLEVBQ0FDLGlCQUFBLEVBQ0FDLHNCQUFBLE1DTkFmLEVBQUEsV0FDQUEsRUFBQSxRQUFBZ0IsT0FBQSw2Q0FFQWhCLEVBQUFpQixRQUFBQyxPQUFBLFdBQ0FsQixFQUFBaUIsUUFBQUUsWUFBQSxJQUNBbkIsRUFBQSxlQUFBb0IsT0FBQSxRQUVBcEIsRUFBQSxlQUFBcUIsUUFBQSxVQUdBckIsRUFBQSxlQUFBc0IsTUFBQSxXQUlBLE1BSEF0QixHQUFBLGNBQUF1QixTQUNBSixVQUFBLEdBQ0EsTUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5hY2NvcmRpb25fX2l0ZW0nKS5vbignY2xpY2snLCAnLmFjY29yZGlvbi1saW5rOm5vdCguYWN0aXZlKScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcuYWNjb3JkaW9uLWxpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmFjY29yZGlvbi1wYW5lbCcpLnNsaWRlVXAoNDAwKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgnLmFjY29yZGlvbi1wYW5lbCcpLnNsaWRlRG93big0MDApLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5tYWluLWNhcm91c2VsJykuZmxpY2tpdHkoe1xyXG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXHJcbiAgICAgICAgYXV0b1BsYXk6IHRydWUsXHJcbiAgICAgICAgaW1hZ2VzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IGZhbHNlXHJcbiAgICB9KTtcclxufSk7IiwiJChmdW5jdGlvbigpe1xyXG4gICAgJCgnYm9keScpLmFwcGVuZCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRvLXRvcC1idG5cIj50byBUb3A8L2E+Jyk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoICQod2luZG93KS5zY3JvbGxUb3AoKSA+IDQwMCApIHtcclxuICAgICAgICAgICAgJCgnLnRvLXRvcC1idG4nKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcudG8tdG9wLWJ0bicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJy50by10b3AtYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
