gsap.to('.card', {
    opacity: 0.5,
    duration: 3,
    onComplete: () => {
        gsap.to('.card', {
            opacity: 1,
            repeat: -1,
            yoyo: true,
            duration: 2
        })
    }
})