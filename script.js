// hero section animations

gsap.fromTo("#name", {x: -500}, {x: 1, duration: 1, ease : "power3.out"});

gsap.fromTo("#jobstatus", {x: -500}, {x: 1, duration: 1, ease : "power3.out"});

gsap.fromTo("#herotext", {x: -500}, {x: 1,  duration: 1, ease : "power3.inOut", delay : 0.3});

// gsap.fromTo("#downloadbtn", {x: -800}, {x: 1, duration: 0.8});

gsap.fromTo("#heroimg", {x: 1000}, {x: 1, duration: 1, ease : "power3.out", delay : 0.8});


//navigation aimations

gsap.fromTo("#navhead", {y: -500}, {y: 1, duration: 0.8});

gsap.fromTo("#navimg", {y: -500}, {y: 1, duration: 0.8});

gsap.fromTo("#navitem", {y: -500}, {y: 1, duration: 0.8});

// scroll animations

gsap.registerPlugin(ScrollTrigger);

if(window.innerWidth > 768){
gsap.from('#skills', {
    opacity: 0,
    x: -500,
    duration: 1,
    stagger: 0.2, // Adjust the stagger value based on your preference
    scrollTrigger: {
      trigger: '#skills', // Element that triggers the animation
      start: 'top 100%', // Adjust the start position based on your preference
    },
  });

  gsap.from('#workexp', {
    opacity: 0,
    x: 500,
    duration: 1,
    stagger: 0.2, // Adjust the stagger value based on your preference
    scrollTrigger: {
      trigger: '#workexp', // Element that triggers the animation
      start: 'top 100%', // Adjust the start position based on your preference
    },
  });

  gsap.from('#project', {
    opacity: 0,
    x: -500,
    duration: 1,
    stagger: 0.2, // Adjust the stagger value based on your preference
    scrollTrigger: {
      trigger: '#project', // Element that triggers the animation
      start: 'top 100%', // Adjust the start position based on your preference
    },
  });

  gsap.from('#hobby', {
    opacity: 0,
    y: 500,
    duration: 1,
    stagger: 0.2, // Adjust the stagger value based on your preference
    scrollTrigger: {
      trigger: '#hobby', // Element that triggers the animation
      start: 'top 100%', // Adjust the start position based on your preference
    },
  });
}

else{
    gsap.from('#skills', {
        opacity: 0,
        y: 500,
        duration: 1,
        stagger: 0.2, // Adjust the stagger value based on your preference
        scrollTrigger: {
          trigger: '#skills', // Element that triggers the animation
          start: 'top 100%', // Adjust the start position based on your preference
        },
      });
    
      gsap.from('#workexp', {
        opacity: 0,
        y: 500,
        duration: 1,
        stagger: 0.2, // Adjust the stagger value based on your preference
        scrollTrigger: {
          trigger: '#workexp', // Element that triggers the animation
          start: 'top 100%', // Adjust the start position based on your preference
        },
      });
    
      gsap.from('#project', {
        opacity: 0,
        y: 500,
        duration: 1,
        stagger: 0.2, // Adjust the stagger value based on your preference
        scrollTrigger: {
          trigger: '#project', // Element that triggers the animation
          start: 'top 100%', // Adjust the start position based on your preference
        },
      });
}