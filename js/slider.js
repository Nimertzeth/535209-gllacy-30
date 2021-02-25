		function setSlide(k) {
			document.querySelectorAll('.slide').forEach(slide=>{slide.style.display = "none"});
			document.getElementById("slide"+k).style.display = "block";
			document.body.style.setProperty("--slide-background","var(--background-"+k+")");
		}
		let i = 0;
		setInterval(function timer() {
				i++;
					if (i == 1) {radio2.checked = true,setSlide(2);
					}
					if (i == 2) {radio3.checked = true,setSlide(3);
					}
					if (i == 3) {radio1.checked = true,setSlide(1),i = 0;
					}
			}, 3000);	