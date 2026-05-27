import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c433979f-6835-4559-a5c4-0174a0e40047/files/a5cc0fb9-7b06-4740-928c-1dc35089c43c.jpg"

const directions = [
  { icon: "Brain", label: "Нейроинтерфейсы (BCI)", desc: "Управление курсором, инвалидной коляской и протезами силой мысли" },
  { icon: "Cpu", label: "Нейропротезы", desc: "Биоэлектрические протезы рук и ног, бионический глаз и кохлеарный имплантат" },
  { icon: "Activity", label: "Нейростимуляция", desc: "Лечение болезни Паркинсона и депрессии методами глубокой стимуляции мозга" },
  { icon: "Leaf", label: "Биомиметика", desc: "Заимствование идей у природы: от клюва зимородка до лапки геккона" },
  { icon: "PersonStanding", label: "Экзоскелеты", desc: "Роботизированные экзоскелеты, помогающие парализованным пациентам ходить" },
  { icon: "FlaskConical", label: "Киборгизация", desc: "Сращивание нервной системы с имплантами на клеточном уровне" },
]

const cases = [
  { title: "BrainGate", desc: "Система позволила парализованным людям управлять роботизированной рукой", tag: "Нейроинтерфейс" },
  { title: "Кохлеарный имплантат", desc: "Один из самых успешных нейропротезов — возвращение слуха глухим людям", tag: "Имплант" },
  { title: "Денис Куренов", desc: "Российский инженер с бионическим протезом руки, управляемым силой мысли", tag: "Протез" },
]

const timeline = [
  {
    year: "XV век",
    icon: "Feather",
    title: "Леонардо да Винчи",
    desc: "Детальное изучение полёта птиц и анатомии. Первые чертежи летательных аппаратов, вдохновлённых природой.",
  },
  {
    year: "1940-е",
    icon: "Radio",
    title: "Рождение кибернетики",
    desc: "Норберт Винер формулирует принципы управления и связи в живых организмах и машинах — фундамент нейробионики.",
  },
  {
    year: "1960-е",
    icon: "Zap",
    title: "Расцвет исследований",
    desc: "Активные эксперименты с нейроэлектронными системами. К.А. Иванов-Муромский классифицирует пассивные и активные нейросистемы.",
  },
  {
    year: "1970-е",
    icon: "BookOpen",
    title: "Академик Бехтерева",
    desc: "Н.П. Бехтерева разрабатывает идеи «переобучения» мозга с помощью биологической обратной связи.",
  },
  {
    year: "1990-е",
    icon: "Ear",
    title: "Кохлеарный имплантат",
    desc: "Массовое внедрение слуховых протезов. Первые сотни тысяч людей возвращают слух благодаря нейропротезированию.",
  },
  {
    year: "2000-е",
    icon: "MousePointer",
    title: "BrainGate",
    desc: "Первые успешные испытания интерфейса мозг–компьютер: парализованный пациент управляет курсором силой мысли.",
  },
  {
    year: "2010-е",
    icon: "PersonStanding",
    title: "Экзоскелеты",
    desc: "Роботизированные экзоскелеты HAL и ReWalk выходят на рынок. Парализованные пациенты делают первые шаги.",
  },
  {
    year: "Сегодня",
    icon: "Sparkles",
    title: "Симбиоз мозга и техники",
    desc: "Передача тактильных ощущений через протезы, управление памятью, Neuralink — граница между человеком и машиной стирается.",
  },
]

const biomimetics = [
  { problem: "Аэродинамика", nature: "Клюв зимородка", tech: "Нос скоростного поезда «Синкансэн»", icon: "Bird" },
  { problem: "Сцепление с поверхностью", nature: "Лапка геккона", tech: "Роботы-альпинисты, адгезивные покрытия", icon: "Bug" },
  { problem: "Самоочистка", nature: "Лист лотоса", tech: "Водоотталкивающие нанопокрытия", icon: "Droplets" },
  { problem: "Застёжка", nature: "Колючка репейника", tech: "Липучка Velcro", icon: "Layers" },
  { problem: "Эхолокация", nature: "Летучая мышь / дельфин", tech: "Гидролокаторы, УЗИ-аппараты", icon: "Waves" },
  { problem: "Оптика", nature: "Фасеточный глаз насекомых", tech: "Широкоугольные камеры и сенсоры", icon: "Eye" },
]

const ethics = [
  {
    icon: "Lock",
    title: "Конфиденциальность мыслей",
    desc: "Кто имеет доступ к данным мозга? Нейроинтерфейсы собирают уникально личную информацию — мысли, эмоции, намерения.",
    color: "from-red-900/20 to-transparent",
    accent: "text-red-400",
  },
  {
    icon: "Scale",
    title: "Неравенство доступа",
    desc: "Дорогостоящие технологии доступны лишь немногим. Риск создания «когнитивного неравенства» между людьми с имплантами и без.",
    color: "from-yellow-900/20 to-transparent",
    accent: "text-yellow-400",
  },
  {
    icon: "ShieldAlert",
    title: "Кибербезопасность",
    desc: "Нейроимпланты — потенциальная цель для хакерских атак. Взлом устройства, управляющего движением, может быть смертельно опасен.",
    color: "from-orange-900/20 to-transparent",
    accent: "text-orange-400",
  },
  {
    icon: "UserCheck",
    title: "Идентичность личности",
    desc: "Где граница между «мной» и «имплантом»? Глубокая интеграция технологий ставит философские вопросы о природе человека.",
    color: "from-purple-900/20 to-transparent",
    accent: "text-purple-400",
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
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16 lg:px-24">
            <div className="flex justify-center mb-10">
              <img src={HERO_IMAGE} alt="Нейрон и микрочип" className="w-full max-w-2xl rounded-2xl object-cover" style={{ maxHeight: "320px" }} />
            </div>

            <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Определение</span>
                <span className="text-foreground font-mono text-sm">Создание технических устройств на основе принципов работы мозга и нервной системы</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Связь наук</span>
                <span className="text-foreground font-mono text-sm">Биоэлектроника · Биомиметика · Оптоэлектроника · Кибернетика</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm whitespace-nowrap">Цитата</span>
                <span className="text-foreground font-mono text-sm italic opacity-80">«Нейробионика — это мост между биологией и инженерией»</span>
              </div>
            </div>

            <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
              Основные направления
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {directions.map((d) => (
                <div key={d.label} className="bg-background border border-border rounded-2xl p-5 flex flex-col gap-3 hover:border-accent transition-colors duration-300">
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

        {/* ── ИСТОРИЯ: ТАЙМЛАЙН ── */}
        <section className="mx-4 md:mx-0 mt-10 mb-2">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            История нейробионики
          </h2>
          <p className="text-muted-foreground font-mono text-sm text-center mb-10">От да Винчи до нейроимплантов</p>

          <div className="relative">
            {/* вертикальная линия */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={item.year} className={`relative flex items-start gap-6 md:gap-0 mb-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Контент */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <div
                        className={`bg-card border border-border rounded-2xl p-5 hover:border-accent transition-colors duration-300 ${isLeft ? "md:ml-auto" : ""}`}
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="text-accent font-mono text-xs font-bold">{item.year}</span>
                        </div>
                        <h3 className="text-foreground font-semibold text-base mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{item.title}</h3>
                        <p className="text-muted-foreground font-mono text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Иконка на линии */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 w-5 h-5 rounded-full bg-accent flex items-center justify-center z-10 shrink-0">
                      <Icon name={item.icon} size={11} className="text-accent-foreground" />
                    </div>

                    {/* Пустая половина (десктоп) */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section className="mx-4 md:mx-0 mt-10 mb-2">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Что уже работает сегодня
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cases.map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3">
                <span className="text-accent font-mono text-xs">{c.tag}</span>
                <h3 className="text-foreground font-semibold text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>{c.title}</h3>
                <p className="text-muted-foreground font-mono text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── БИОМИМЕТИКА ── */}
        <section
          className="relative rounded-4xl mx-4 md:mx-0 mt-10 bg-card border border-border overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-30 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-30 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-30 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-30 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16 lg:px-24 py-14">
            <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
              Биомиметика в действии
            </h2>
            <p className="text-muted-foreground font-mono text-sm text-center mb-10">Природа — лучший инженер</p>

            {/* Шапка таблицы */}
            <div className="hidden md:grid grid-cols-4 gap-4 mb-3 px-4">
              <span className="text-accent font-mono text-xs uppercase tracking-widest">Задача</span>
              <span className="text-accent font-mono text-xs uppercase tracking-widest">Природное решение</span>
              <span className="text-accent font-mono text-xs uppercase tracking-widest"></span>
              <span className="text-accent font-mono text-xs uppercase tracking-widest">Технология</span>
            </div>

            <div className="flex flex-col gap-3">
              {biomimetics.map((row) => (
                <div
                  key={row.problem}
                  className="bg-background border border-border rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-5 items-center hover:border-accent transition-colors duration-300"
                >
                  {/* Задача */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon name={row.icon} size={16} className="text-accent" />
                    </div>
                    <span className="text-foreground font-mono text-sm font-semibold">{row.problem}</span>
                  </div>

                  {/* Природа */}
                  <div className="md:pl-2">
                    <span className="text-muted-foreground font-mono text-xs block md:hidden mb-0.5">Природное решение</span>
                    <span className="text-foreground font-mono text-sm">{row.nature}</span>
                  </div>

                  {/* Стрелка */}
                  <div className="hidden md:flex justify-center items-center">
                    <div className="flex items-center gap-1 text-accent">
                      <div className="h-px w-8 bg-accent" />
                      <Icon name="ArrowRight" size={14} className="text-accent" />
                    </div>
                  </div>

                  {/* Технология */}
                  <div>
                    <span className="text-muted-foreground font-mono text-xs block md:hidden mb-0.5">Технология</span>
                    <span className="text-foreground font-mono text-sm">{row.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ЭТИЧЕСКИЕ ВЫЗОВЫ ── */}
        <section className="mx-4 md:mx-0 mt-10 mb-10">
          <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Этические вызовы
          </h2>
          <p className="text-muted-foreground font-mono text-sm text-center mb-10">
            Технологии опережают законы — нам нужны ответы
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ethics.map((e) => (
              <div
                key={e.title}
                className={`relative bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 overflow-hidden hover:border-accent/50 transition-colors duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${e.color} pointer-events-none`} />
                <div className="relative flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background/50 border border-border flex items-center justify-center shrink-0">
                    <Icon name={e.icon} size={18} className={e.accent} />
                  </div>
                  <h3 className="text-foreground font-semibold text-base" style={{ fontFamily: "var(--font-montserrat)" }}>{e.title}</h3>
                </div>
                <p className="relative text-muted-foreground font-mono text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>

          {/* Итоговая цитата */}
          <div className="mt-8 border border-accent/30 rounded-2xl p-6 text-center bg-accent/5">
            <p className="text-foreground font-mono text-sm italic leading-relaxed">
              «Будущее требует от нас не только инженерных решений, но и этической ответственности»
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Index
