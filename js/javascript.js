// By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service.

 
const myVotePrototype = {
  init: function(id) {
    this.voteId = id;
    // Prepare for voting clicks
    this.bindEvents();
  },
  votes: 0,
  upVote: function() {
    this.votes++;
    this.setVoteDirection('up');
  },
  downVote: function() {
    this.votes--;
    this.setVoteDirection('down');
  },
  setVoteDirection: function(direction) {
    let voteObj = document.getElementById(this.voteId);
    if (direction === 'up') {
      voteObj.classList.add('vote-up');
      if (voteObj.classList.contains('vote-down')) {
        voteObj.classList.remove('vote-down');
      }
    } else if (direction === 'down') {
      voteObj.classList.add('vote-down');
      if (voteObj.classList.contains('vote-up')) {
        voteObj.classList.remove('vote-up');
      }      
    }
  },
  updateUI: function() {
    document.querySelector(`#${this.voteId} .number`).innerHTML = Number(this.votes);
  },
  bindEvents: function() {
    document
      .querySelector(`#${this.voteId} .up-vote`)
      .addEventListener('click', () => {
        this.upVote();
        this.updateUI();
      });
    document
      .querySelector(`#${this.voteId} .down-vote`)
      .addEventListener('click', () => {
        this.downVote();
        this.updateUI();
      })
  }
};

function myVote(id) {
  function V() {};
  V.prototype = myVotePrototype;

  let v = new V();

  v.init(id);
  return v;
}

// Loop through all votes in the UI
const votes = document.querySelectorAll('.vote');
votes.forEach((vote, index) => {
  // Create an id
  let voteId = `vote_${index}`;
  // Set the id in the UI so we can find it later for updating
  vote.setAttribute('id', voteId);
  // Create a new vote object, passing in the vote id
  myVote(voteId);
});
  // When the user scrolls down 20px from the top of the document, show the button


  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("to-top").style.display = "block";
    } else {
      document.getElementById("to-top").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  

    

// ...................mobile nav......................
function MobileNav () {
  var x = document.getElementById("mylinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// ...................jquery function....................................

$(function() {
  $(".toggle").on("click", function() {
      if ($(".nav-item").hasClass("active")) {
          $(".nav-item").removeClass("active");
          $(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
          $(".nav-item").addClass("active");
          $(this).find("a").html("<i class='fas fa-times'></i>");
      }
  });
});


  $(document).ready(function() {
  $(".port1").hover(function(){
  $(".port1").mouseenter(function(){
  $("#button1").show();
  });

  $(".port1").mouseleave(function(){
  $("#button1").hide();
  });
  });
  $(".port1").hover(function(){
   $(".port1").mouseenter(function(){
    $("#button1").show();
  });
    $(".port1").mouseleave(function(){
    $("#button1").hide();
  });
  });
  $(".port2").hover(function(){
  $(".port2").mouseenter(function(){
  $("#button2").show();
  });
  $(".port2").mouseleave(function(){
  $("#button2").hide();
   });
  });
  $(".port3").hover(function(){
   $(".port3").mouseenter(function(){
     $("#button3").show();
     });
    $(".port3").mouseleave(function(){
    $("#button3").hide();
  });
  });
  $(".port4").hover(function(){
  $(".port4").mouseenter(function(){
    $("#button4").show();
    });
    $(".port4").mouseleave(function(){
    $("#button4").hide();
    });   
    });
  $(".port5").hover(function(){
    $(".port5").mouseenter(function(){
    $("#button5").show();
    });
    $(".port5").mouseleave(function(){
    $("#button5").hide();
          });
         
      });
      $(".port6").hover(function(){
        $(".port6").mouseenter(function(){
        $("#button6").show();
        });
        $(".port6").mouseleave(function(){
          $("#button6").hide();
          });
         
      });
      $(".port7").hover(function(){
        $(".port7").mouseenter(function(){
        $("#button7").show();
        });
        $(".port7").mouseleave(function(){
        $("#button7").hide();
          });
         
      });
      $(".port8").hover(function(){
        $(".port8").mouseenter(function(){
        $("#button8").show();
        });
        $(".port8").mouseleave(function(){
          $("#button8").hide();
          });
         
      });
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });
   
