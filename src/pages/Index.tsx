import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c433979f-6835-4559-a5c4-0174a0e40047/files/a5cc0fb9-7b06-4740-928c-1dc35089c43c.jpg"

const directions = [
  {
    icon: "Brain",
    label: "Нейроинтерфейсы (BCI)",
    desc: "Управление курсором, инвалидной коляской и протезами силой мысли",
  },
  {
    icon: "Cpu",
    label: "Нейропротезы",
    desc: "Биоэлектрические протезы рук и ног, бионический глаз и кохлеарный имплантат",
  },
  {
    icon: "Activity",
    label: "Нейростимуляция",
    desc: "Лечение болезни Паркинсона и депрессии методами глубокой стимуляции мозга",
  },
  {
    icon: "Leaf",
    label: "Биомиметика",
    desc: "Заимствование идей у природы: от клюва зимородка до лапки геккона",
  },
  {
    icon: "PersonStanding",
    label: "Экзоскелеты",
    desc: "Роботизированные экзоскелеты, помогающие парализованным пациентам ходить",
  },
  {
    icon: "FlaskConical",
    label: "Киборгизация",
    desc: "Сращивание нервной системы с имплантами на клеточном уровне",
  },
]

const cases = [
  {
    title: "BrainGate",
    desc: "Система позволила парализованным людям управлять роботизированной рукой",
    tag: "Нейроинтерфейс",
  },
  {
    title: "Кохлеарный имплантат",
    desc: "Один из самых успешных нейропротезов — возвращение слуха глухим людям",
    tag: "Имплант",
  },
  {
    title: "Синкансэн",
    desc: "Скоростной поезд с аэродинамическим носом, скопированным с клюва зимородка",
    tag: "Биомиметика",
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Что такое нейробионика */}
        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20 mt-6"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16 lg:px-24">
            {/* Hero-изображение */}
            <div className="flex justify-center mb-10">
              <img
                src={HERO_IMAGE}
                alt="Нейрон и микрочип"
                className="w-full max-w-2xl rounded-2xl object-cover"
                style={{ maxHeight: "320px" }}
              />
            </div>

            {/* Описание */}
            <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Определение</span>
                <span className="text-foreground font-mono text-sm">
                  Создание технических устройств на основе принципов работы мозга и нервной системы
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Связь наук</span>
                <span className="text-foreground font-mono text-sm">
                  Биоэлектроника · Биомиметика · Оптоэлектроника · Кибернетика
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Цитата</span>
                <span className="text-foreground font-mono text-sm italic opacity-80">
                  «Нейробионика — это мост между биологией и инженерией»
                </span>
              </div>
            </div>

            {/* Направления */}
            <h2
              className="text-foreground text-2xl md:text-3xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Основные направления
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {directions.map((d) => (
                <div
                  key={d.label}
                  className="bg-background border border-border rounded-2xl p-5 flex flex-col gap-3 hover:border-accent transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name={d.icon} size={18} className="text-accent" />
                    </div>
                    <span className="text-foreground font-mono text-sm font-semibold">{d.label}</span>
                  </div>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section className="mx-4 md:mx-0 mt-6 mb-6">
          <h2
            className="text-foreground text-2xl md:text-3xl font-bold mb-6 text-center"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Что уже работает сегодня
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div
                key={c.title}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3"
              >
                <span className="text-accent font-mono text-xs">{c.tag}</span>
                <h3 className="text-foreground font-semibold text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {c.title}
                </h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Index
