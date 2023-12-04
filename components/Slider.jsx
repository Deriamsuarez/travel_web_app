import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Image } from "@nextui-org/react"

const Slider = () => {


    const images = [1,2,3,4,5,6]
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
      <div ref={sliderRef} className="keen-slider">
{images.map( source =>
      <Image
      key={source}
      src="https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"
      shadow="sm"
      width="100%"
      className="w-full object-cover h-[140px] keen-slider__slide"
    />
    )}
    </div>
      )
}

export default Slider