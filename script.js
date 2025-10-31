let testIdx = 0;
let freqBoxes = [false, false, false, false];
const testParas = [`"They have done a great job with a ridicously quick return time, while maintaining a great quality. Perfect for any business trying to react quickly and take hold of the social media gawk."<span>Lorem ipsum dolor sit amet consectetur. sssssssss s</span>`, `"Elevare helped me with a couple different projects for my clients: podcast style video, webinar snippets, and video editing. They did a really good job, quick turnaround and they're a pleasure to work with. Can happily recommend their services!"`, `"Elevare have been running our social media posts for 6 months now, we've seen a huge increase across views & engagement and they've elevated our social media presence dramatically. It's a real pleasure to work with a team so efficient & talented and I don't know how I ever managed without them!"`]
document.querySelectorAll(".freq-box").forEach((box, idx) => {
    box.addEventListener("click", () => {
        let boxHeight;
        if(window.innerWidth <= 1000){
            boxHeight = 57;
        } else if(window.innerWidth <= 1640){
            boxHeight = 67;
        } else {
            boxHeight = 87;
        }

        if(!freqBoxes[idx]){
            box.querySelector(".fline1").style.transform = "rotate(90deg)";
            //box.style.height = (boxHeight + 87) + "px";
            box.classList.remove("freq-normal");
            box.classList.add("freq-expand");
            setTimeout(() => {
                box.querySelector(".freq-desc").style.opacity = "1";
            }, 200);
            freqBoxes[idx] = true;
        } else {
            box.querySelector(".fline1").style.transform = "rotate(0deg) translateX(-50%)";
            box.querySelector(".freq-desc").style.opacity = "0";
            setTimeout(() => {
                box.classList.add("freq-normal");
                box.classList.remove("freq-expand");
            }, 200);
            freqBoxes[idx] = false;
        }
    });
});

document.addEventListener("keydown", (e) => {
    if(e.key == "w"){
        console.log(window.innerWidth);
    }
});

const menuContainer = document.querySelector(".menu-container");

function openMenu(){
    menuContainer.style.opacity = "1";
    menuContainer.style.pointerEvents = "auto";
}
function closeMenu(){
    menuContainer.style.opacity = "0";
    menuContainer.style.pointerEvents = "none";
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.top = "0px";
          entry.target.style.opacity = "1";
          if(entry.target.classList.contains("flow-wrapper")){
            console.log("w");
            entry.target.querySelectorAll(".flow-card, .flow-box, .flow-logo-container, .flow-dash").forEach((el, idx) => {
                setTimeout(() => {
                    el.style.opacity = "1";
                }, 250 * (idx + 1));
            });
          }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});

const pop = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = "1";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
});
document.querySelectorAll(".pop-target").forEach(target => {
    pop.observe(target);
});

function startAnimation(){
    document.querySelectorAll(".starter").forEach((el, idx) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.top = "0px";
        }, 250 * (idx + 1));
    });
}
setTimeout(startAnimation, 100);

function changeReview(direction){
    if(direction == "right"){
        testIdx++;
        if(testIdx == document.querySelectorAll(".test-avatar").length) testIdx = 0;
    } else {
        testIdx--;
        if(testIdx == -1) testIdx = (document.querySelectorAll(".test-avatar").length - 1);
    }
    document.querySelector(".test-para").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".test-para").innerHTML = testParas[testIdx];
        setTimeout(() => {
            document.querySelector(".test-para").style.opacity = "1";
        }, 50);
    }, 300);
    document.querySelectorAll(".test-avatar").forEach((el, idx) => {
        if(idx != testIdx){
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
            }, 300);
        }
        if(idx == testIdx){
            setTimeout(() => {
                el.style.display = "block";
                setTimeout(() => {
                    el.style.opacity = "1";
                }, 50);
            }, 300);
        }
    });
    document.querySelectorAll(".pers-col").forEach((el, idx) => {
        if(idx != testIdx){
            el.style.opacity = "0";
            setTimeout(() => {
                el.style.display = "none";
            }, 300);
        }
        if(idx == testIdx){
            setTimeout(() => {
                el.style.display = "block";
                setTimeout(() => {
                    el.style.opacity = "1";
                }, 10);
            }, 300);
        }
    });
}

function changeCase(){
    let active = document.querySelector(".case-bento-active");
    let inactive = document.querySelector(".case-bento-inactive");

    active.classList.remove("case-bento-active");
    active.classList.add("case-bento-inactive");
    setTimeout(() => {
        active.style.display = "none";
        inactive.style.display = "block";
        setTimeout(() => {
            inactive.classList.remove("case-bento-inactive");
            inactive.classList.add("case-bento-active");
        }, 50);
    }, 500);
}