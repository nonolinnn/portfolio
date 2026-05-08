import { motion } from 'framer-motion'

const viewport = { once: true, amount: 0.3 }

const rowImages = [
  '/intro/row/travel_1.jpeg',
  '/intro/row/travel_2.jpeg',
  '/intro/row/travel_3.jpeg',
  '/intro/row/travel_4.jpeg',
  '/intro/row/travel_5.jpeg',
  '/intro/row/travel_6.jpeg',
]

const rowMarqueeImages = [...rowImages, ...rowImages]

const travelImages = [
  '/intro/travel_1.jpeg',
  '/intro/travel_2.jpeg',
  '/intro/travel_3.jpeg',
  '/intro/travel_4.jpeg',
  '/intro/travel_5.jpeg',
  '/intro/travel_6.jpeg',
]

const marqueeImages = [...travelImages, ...travelImages]

const paragraphs = [
  {
    text: "Coucou, Je suis Nono. I am currently a software engineer who is passionate about finding the perfect balance between digital technology and user experience.",
    delay: 0.3,
  },
  {
    text: "With empathy as my foundation, I explore how to create human-centered solutions in a world of 0s and 1s. Every collision between rationality and sensibility deepens my understanding of the world.",
    delay: 0.5,
  },
  {
    text: "Beyond coding, I love deep solo travel across different countries. I enjoy interacting with local people to exchange cultures and learn new languages. These experiences have given me strong adaptability and a highly open-minded perspective.",
    delay: 0.7,
  },
]


export default function IntroSection() {
  return (
    <section className="bg-background min-h-screen flex items-center">
      <div className="w-full flex flex-col">
        <div className="px-5 md:px-12 w-full grid grid-cols-1 lg:grid-cols-[30fr_70fr] 2xl:grid-cols-[40fr_60fr] lg:gap-14 py-16 md:py-24">

          {/* Left: vertical film strip marquee — desktop only */}
          <div className="hidden lg:flex lg:justify-end lg:items-stretch">
            <div className="relative overflow-hidden marquee-container w-50">
              <div className="marquee-track absolute top-0 left-0 right-0">
                {marqueeImages.map((src, i) => (
                  <div key={i} className="film-cell">
                    <img
                      src={src}
                      alt={`Travel ${(i % travelImages.length) + 1}`}
                      className="w-full aspect-3/4 object-cover block rounded-1 bg-film"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: tagline + paragraphs */}
          <div className="flex flex-col justify-center max-w-200">
            <motion.h2
              className="text-12 font-serif text-accent-muted leading-tight m-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
            >
              The Art of Logic: Where Sensibility Meets Code
            </motion.h2>

            {paragraphs.map(({ text, delay }, i) => (
              <motion.p
                key={i}
                className={`font-sans text-4 text-dark-brown leading-relaxed m-0 mt-6 md:text-5`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: 'easeOut', delay }}
              >
                {text}
              </motion.p>
            ))}
          </div>

        </div>

        {/* Horizontal film strip — mobile/tablet only */}
        <div className="lg:hidden relative overflow-hidden marquee-container-row h-45">
          <div className="marquee-track-row relative h-full">
            {rowMarqueeImages.map((src, i) => (
              <div key={i} className="film-cell-row h-full">
                <img
                  src={src}
                  alt={`Row travel ${(i % rowImages.length) + 1}`}
                  className="h-full aspect-4/3 object-cover block rounded-1 bg-film"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
