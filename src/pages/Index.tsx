import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [salesCount, setSalesCount] = useState(0);
  const [productionCount, setProductionCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Анимированные счетчики
  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(setSalesCount, 15847);
      animateCounter(setProductionCount, 2850);
      animateCounter(setYearsCount, 150);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBeige via-white to-lightBeige">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-cognac/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-cormorant text-2xl font-bold text-cognac">
              Premium Cognac
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-open text-darkBrown hover:text-cognac transition-colors duration-300">Главная</a>
              <a href="#stats" className="font-open text-darkBrown hover:text-cognac transition-colors duration-300">Статистика</a>
              <a href="#production" className="font-open text-darkBrown hover:text-cognac transition-colors duration-300">Производство</a>
              <a href="#contact" className="font-open text-darkBrown hover:text-cognac transition-colors duration-300">Контакты</a>
            </div>
            <Button variant="outline" className="border-cognac text-cognac hover:bg-cognac hover:text-white transition-all duration-300">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-cormorant text-6xl lg:text-7xl font-bold text-cognac leading-tight">
                Элитный
                <span className="block text-darkBrown">Коньяк</span>
                <span className="block text-goldAccent">Премиум класса</span>
              </h1>
              <p className="font-open text-xl text-gray-700 leading-relaxed">
                Откройте для себя мир изысканных коньяков, созданных по традиционным французским рецептам. 
                Каждая бутылка — это произведение искусства с богатой историей и неповторимым вкусом.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cognac hover:bg-darkBrown text-white font-open font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <Icon name="Wine" size={20} className="mr-2" />
                  Посмотреть коллекцию
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-darkBrown text-darkBrown hover:bg-darkBrown hover:text-white font-open font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-300">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-cognac/20 to-goldAccent/20 rounded-full blur-3xl"></div>
              <img 
                src="/img/f8d2bac9-23b1-4c55-b840-0fa7726a569a.jpg" 
                alt="Premium Cognac" 
                className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-5xl font-bold text-cognac mb-4">Статистика продаж</h2>
            <p className="font-open text-xl text-gray-600">Наши достижения в цифрах</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-cognac/20 hover:border-cognac/40 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cognac/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={32} className="text-cognac" />
                </div>
                <CardTitle className="font-cormorant text-4xl font-bold text-cognac">
                  {salesCount.toLocaleString()}
                </CardTitle>
                <CardDescription className="font-open text-lg text-darkBrown">
                  Бутылок продано в 2024 году
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 border-cognac/20 hover:border-cognac/40 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-darkBrown/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Factory" size={32} className="text-darkBrown" />
                </div>
                <CardTitle className="font-cormorant text-4xl font-bold text-darkBrown">
                  {productionCount.toLocaleString()}
                </CardTitle>
                <CardDescription className="font-open text-lg text-cognac">
                  Литров произведено ежемесячно
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 border-cognac/20 hover:border-cognac/40 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-goldAccent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-goldAccent" />
                </div>
                <CardTitle className="font-cormorant text-4xl font-bold text-goldAccent">
                  {yearsCount}+
                </CardTitle>
                <CardDescription className="font-open text-lg text-cognac">
                  Лет традиций и мастерства
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-16 bg-gradient-to-r from-lightBeige/50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-5xl font-bold text-cognac mb-4">Наше производство</h2>
            <p className="font-open text-xl text-gray-600">Традиции, передаваемые из поколения в поколение</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-cognac/20 hover:border-cognac transition-all duration-500 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-cognac/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cognac/20 transition-colors duration-300">
                  <Icon name="Grape" size={24} className="text-cognac" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-cognac">Отбор винограда</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open text-gray-600">
                  Тщательный отбор лучших сортов винограда из регионов Коньяк во Франции для создания исключительного вкуса.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-cognac/20 hover:border-cognac transition-all duration-500 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-darkBrown/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-darkBrown/20 transition-colors duration-300">
                  <Icon name="Flame" size={24} className="text-darkBrown" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-cognac">Дистилляция</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open text-gray-600">
                  Двойная дистилляция в медных кубах по традиционной технологии, сохраняющей уникальный аромат и вкус.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-cognac/20 hover:border-cognac transition-all duration-500 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-goldAccent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-goldAccent/20 transition-colors duration-300">
                  <Icon name="Clock" size={24} className="text-goldAccent" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-cognac">Выдержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open text-gray-600">
                  Длительная выдержка в дубовых бочках от 10 до 50 лет для достижения глубины вкуса и аромата.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-cognac text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="font-open text-xl mb-8 text-lightBeige">
                Готовы открыть для себя мир элитных коньяков? Наши эксперты помогут выбрать идеальную бутылку для любого случая.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-goldAccent" />
                  <span className="font-open">Москва, ул. Тверская, 15</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-goldAccent" />
                  <span className="font-open">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-goldAccent" />
                  <span className="font-open">info@premium-cognac.ru</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-lightBeige">
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-lightBeige focus:outline-none focus:border-goldAccent transition-colors duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-lightBeige focus:outline-none focus:border-goldAccent transition-colors duration-300"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-lightBeige focus:outline-none focus:border-goldAccent transition-colors duration-300 resize-none"
                />
                <Button className="w-full bg-goldAccent hover:bg-goldAccent/90 text-cognac font-open font-semibold py-3 transform hover:scale-105 transition-all duration-300">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkBrown text-lightBeige py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="font-cormorant text-2xl font-bold text-goldAccent mb-4">Premium Cognac</div>
          <p className="font-open text-sm">© 2024 Premium Cognac. Все права защищены.</p>
          <p className="font-open text-xs mt-2 text-lightBeige/70">Чрезмерное употребление алкоголя вредит вашему здоровью</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;