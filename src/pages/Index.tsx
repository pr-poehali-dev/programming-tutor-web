import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Index() {
  return (
    <div className="min-h-screen bg-tutor-light">
      {/* Header */}
      <header className="bg-hero-gradient text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-tutor-indigo rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold">PROGRAMMING TUTOR</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <span className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-tutor-emerald" />
              <span>8+ лет опыта</span>
            </span>
            <span className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-tutor-emerald" />
              <span>1000+ успешных учеников</span>
            </span>
          </div>
          <Button className="bg-tutor-indigo hover:bg-tutor-purple text-white font-semibold px-6 py-3 animate-pulse-glow border-0">
            Начать обучение прямо сейчас!
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Станьте <span className="text-tutor-emerald">профессиональным</span><br />
              программистом с нуля
            </h1>
            <p className="text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
              Индивидуальный подход, реальные проекты и результат уже через 3 месяца
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Icon name="DollarSign" size={56} className="text-red-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Устали от низкой зарплаты?</h3>
              <p className="text-gray-200 text-lg">Программисты зарабатывают от 100,000₽ в месяц</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Icon name="Home" size={56} className="text-tutor-emerald mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Хотите работать удаленно?</h3>
              <p className="text-gray-200 text-lg">Работайте из любой точки мира в удобное время</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Icon name="Zap" size={56} className="text-yellow-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Страшно начать с нуля?</h3>
              <p className="text-gray-200 text-lg">Мы научим вас пошагово от основ до трудоустройства</p>
            </div>
          </div>

          {/* Success Visualization */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-tutor-orange rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Trophy" size={32} className="text-white" />
              </div>
              <p className="text-sm text-tutor-light-purple">Получите востребованную профессию</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tutor-orange rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Wallet" size={32} className="text-white" />
              </div>
              <p className="text-sm text-tutor-light-purple">Начните зарабатывать через 3 месяца</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tutor-orange rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon name="Briefcase" size={32} className="text-white" />
              </div>
              <p className="text-sm text-tutor-light-purple">Станьте независимым специалистом</p>
            </div>
          </div>

          <Button size="lg" className="bg-tutor-orange hover:bg-tutor-orange/90 text-white text-lg px-12 py-4 animate-pulse-glow">
            <Icon name="PlayCircle" size={24} className="mr-2" />
            Записаться на бесплатную консультацию
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/1a9e3447-2537-425b-870d-467b01fe13e7.jpg" 
                alt="Профессиональный репетитор по программированию" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="animate-fade-in-up">
              <Badge className="bg-tutor-purple text-white mb-4">О преподавателе</Badge>
              <h2 className="text-4xl font-bold text-tutor-dark-blue mb-6">
                Привет! Я Александр — ваш наставник в мире программирования
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <Icon name="GraduationCap" size={24} className="inline text-tutor-purple mr-2" />
                  <strong>Педагогическое образование</strong> — знаю, как объяснить сложное простыми словами
                </p>
                <p>
                  <Icon name="Code2" size={24} className="inline text-tutor-purple mr-2" />
                  <strong>8+ лет в веб-разработке</strong> — работал в крупных IT-компаниях
                </p>
                <p>
                  <Icon name="Clock" size={24} className="inline text-tutor-purple mr-2" />
                  <strong>Гибкий график</strong> — подстроюсь под ваше расписание
                </p>
                <p>
                  <Icon name="Target" size={24} className="inline text-tutor-purple mr-2" />
                  <strong>Реальные проекты</strong> — учимся на практических задачах
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-tutor-gradient text-white hover:opacity-90">
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  Связаться со мной
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-tutor-purple text-white mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold text-tutor-dark-blue mb-6">
              Выберите свой путь в программировании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Индивидуальные программы обучения для начинающих и продолжающих
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card-gradient text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Веб-разработка</CardTitle>
                <CardDescription className="text-white/80">
                  HTML, CSS, JavaScript, React
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6">
                  <p className="text-sm">• Создание современных сайтов</p>
                  <p className="text-sm">• Адаптивная верстка</p>
                  <p className="text-sm">• Интерактивные приложения</p>
                </div>
                <div className="text-2xl font-bold mb-2">от 2,500₽/час</div>
                <p className="text-xs text-white/80">Начните зарабатывать уже через 3 месяца</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Программирование</CardTitle>
                <CardDescription className="text-white/80">
                  Python, JavaScript, основы
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6">
                  <p className="text-sm">• Логика программирования</p>
                  <p className="text-sm">• Алгоритмы и структуры данных</p>
                  <p className="text-sm">• Практические проекты</p>
                </div>
                <div className="text-2xl font-bold mb-2">от 2,000₽/час</div>
                <p className="text-xs text-white/80">Получите востребованную профессию</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Компьютерная грамотность</CardTitle>
                <CardDescription className="text-white/80">
                  Основы работы с ПК
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6">
                  <p className="text-sm">• Операционные системы</p>
                  <p className="text-sm">• Офисные программы</p>
                  <p className="text-sm">• Интернет и безопасность</p>
                </div>
                <div className="text-2xl font-bold mb-2">от 1,500₽/час</div>
                <p className="text-xs text-white/80">Станьте уверенным пользователем</p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Работа с программами</CardTitle>
                <CardDescription className="text-white/80">
                  Специализированное ПО
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6">
                  <p className="text-sm">• Adobe Creative Suite</p>
                  <p className="text-sm">• Системы управления</p>
                  <p className="text-sm">• Автоматизация процессов</p>
                </div>
                <div className="text-2xl font-bold mb-2">от 2,200₽/час</div>
                <p className="text-xs text-white/80">Освойте профессиональные инструменты</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-tutor-orange hover:bg-tutor-orange/90 text-white text-lg px-12 py-4">
              <Icon name="Calendar" size={24} className="mr-2" />
              Выбрать программу обучения
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-tutor-gradient text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-tutor-orange text-white mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Истории успеха моих учеников
            </h2>
            <p className="text-xl text-tutor-light-purple max-w-3xl mx-auto">
              Более 1000 человек уже изменили свою жизнь благодаря программированию
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-tutor-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">М</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Михаил, 28 лет</h4>
                    <p className="text-sm text-tutor-light-purple">Frontend разработчик</p>
                  </div>
                </div>
                <p className="text-tutor-light-purple mb-4">
                  "За 4 месяца изучил React и устроился в IT-компанию. Зарплата выросла с 35,000 до 120,000 рублей!"
                </p>
                <div className="flex text-tutor-orange">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-tutor-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">А</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна, 32 года</h4>
                    <p className="text-sm text-tutor-light-purple">Python разработчик</p>
                  </div>
                </div>
                <p className="text-tutor-light-purple mb-4">
                  "Александр объясняет очень понятно! Теперь работаю удаленно и больше времени провожу с семьей."
                </p>
                <div className="flex text-tutor-orange">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-tutor-orange rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">Д</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Дмитрий, 25 лет</h4>
                    <p className="text-sm text-tutor-light-purple">Fullstack разработчик</p>
                  </div>
                </div>
                <p className="text-tutor-light-purple mb-4">
                  "Начал с нуля, через полгода уже делал сайты на заказ. Первый проект окупил всё обучение!"
                </p>
                <div className="flex text-tutor-orange">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-tutor-dark-blue text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ваш успех начинается <span className="text-tutor-orange">здесь</span>
          </h2>
          <p className="text-xl text-tutor-light-purple mb-8">
            Не откладывайте на завтра то, что изменит вашу жизнь уже сегодня
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-tutor-orange">Бесплатная консультация включает:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={20} className="text-green-400" />
                <span>Анализ ваших целей</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={20} className="text-green-400" />
                <span>Персональный план обучения</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={20} className="text-green-400" />
                <span>Демо-урок</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={20} className="text-green-400" />
                <span>Карьерные рекомендации</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="bg-tutor-orange hover:bg-tutor-orange/90 text-white text-xl px-12 py-6 animate-pulse-glow">
              <Icon name="Rocket" size={24} className="mr-2" />
              Записаться на бесплатную консультацию
            </Button>
            <p className="text-sm text-tutor-light-purple">
              📞 +7 (999) 123-45-67 | 📧 info@codementor.ru | 💬 Telegram: @codementor
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Code" size={32} className="text-tutor-orange" />
                <span className="text-2xl font-bold">CodeMentor</span>
              </div>
              <p className="text-gray-400 mb-4">
                Персональное обучение программированию для достижения ваших целей
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-tutor-orange text-tutor-orange hover:bg-tutor-orange hover:text-white">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-tutor-orange text-tutor-orange hover:bg-tutor-orange hover:text-white">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-tutor-orange text-tutor-orange hover:bg-tutor-orange hover:text-white">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Веб-разработка</li>
                <li>Python программирование</li>
                <li>JavaScript курсы</li>
                <li>Компьютерная грамотность</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Форматы обучения</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Индивидуальные занятия</li>
                <li>Групповые курсы</li>
                <li>Онлайн обучение</li>
                <li>Корпоративное обучение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +7 (999) 123-45-67</li>
                <li>📧 info@codementor.ru</li>
                <li>💬 Telegram: @codementor</li>
                <li>🏠 Москва, онлайн по всему миру</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeMentor. Все права защищены. Поехали к успеху вместе! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  )
}