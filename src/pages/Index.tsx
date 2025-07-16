import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Compass" className="text-adventure-orange" size={28} />
              <span className="text-2xl font-montserrat font-bold text-adventure-charcoal">
                Мы Едем
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-adventure-orange transition-colors">
                Главная
              </a>
              <a href="#tours" className="text-gray-700 hover:text-adventure-orange transition-colors">
                Туры
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-adventure-orange transition-colors">
                Галерея
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-adventure-orange transition-colors">
                Отзывы
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-adventure-orange transition-colors">
                Контакты
              </a>
            </div>
            <Button className="bg-adventure-orange hover:bg-adventure-orange/90 text-white">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-adventure-light via-white to-adventure-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-adventure-green text-white mb-4">
                Семейные путешествия
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-adventure-charcoal mb-6 leading-tight">
                Приключения выходного дня из{' '}
                <span className="text-adventure-orange">Липецка</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Откройте для себя удивительные места в радиусе 2-3 часов от Липецка. 
                Создаем незабываемые семейные воспоминания каждые выходные.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-adventure-orange hover:bg-adventure-orange/90 text-white px-8 py-6 text-lg font-medium"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Выбрать тур
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-adventure-green text-adventure-green hover:bg-adventure-green hover:text-white px-8 py-6 text-lg font-medium"
                >
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Посмотреть маршруты
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src="https://v3.fal.media/files/tiger/aaHi2aFEOImSior6katkF_output.png" 
                  alt="Семейное путешествие"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="font-montserrat font-semibold">4.9</span>
                    <span className="text-gray-500">из 5</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">200+ довольных семей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-adventure-orange text-white mb-4">
              Популярные маршруты
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-adventure-charcoal mb-6">
              Куда поедем на выходные?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Тщательно отобранные места для семейного отдыха в радиусе 2-3 часов от Липецка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour Card 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-adventure-green to-adventure-green/80 overflow-hidden">
                <img 
                  src="/img/5119f819-97a6-422f-8d88-fb850637c61e.jpg" 
                  alt="Семейное приключение в природе"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-adventure-charcoal">
                    Природный парк "Кудыкина гора"
                  </CardTitle>
                  <Badge variant="secondary">2 часа</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Сказочный мир с деревянными скульптурами, озером и огнедышащим драконом. 
                  Идеально для семей с детьми.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" className="text-adventure-green" size={16} />
                    <span className="text-sm text-gray-600">Для всей семьи</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" className="text-adventure-orange" size={16} />
                    <span className="text-sm text-gray-600">Целый день</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-adventure-orange hover:bg-adventure-orange/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Tour Card 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden">
                <img 
                  src="/img/b34f3781-1763-4dad-b1a0-e4a55000dc19.jpg" 
                  alt="Воронежское водохранилище"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-adventure-charcoal">
                    Воронежское водохранилище
                  </CardTitle>
                  <Badge variant="secondary">1.5 часа</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Живописные пляжи, водные развлечения и рыбалка. 
                  Отличное место для активного семейного отдыха.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Fish" className="text-adventure-green" size={16} />
                    <span className="text-sm text-gray-600">Рыбалка</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Sun" className="text-adventure-orange" size={16} />
                    <span className="text-sm text-gray-600">Летом</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-adventure-orange hover:bg-adventure-orange/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Tour Card 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-purple-600 overflow-hidden">
                <img 
                  src="/img/b2121f16-3267-4938-843d-f733a3e718d4.jpg" 
                  alt="Усадьба Рамонь"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-montserrat text-adventure-charcoal">
                    Усадьба Рамонь
                  </CardTitle>
                  <Badge variant="secondary">2.5 часа</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Дворцовый комплекс XIX века с парком и музеем. 
                  Погружение в историю и архитектуру.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="BookOpen" className="text-adventure-green" size={16} />
                    <span className="text-sm text-gray-600">История</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Camera" className="text-adventure-orange" size={16} />
                    <span className="text-sm text-gray-600">Фотосессия</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-adventure-orange hover:bg-adventure-orange/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-adventure-green text-white mb-4">
              Галерея
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-adventure-charcoal mb-6">
              Моменты наших путешествий
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Яркие воспоминания наших гостей из поездок выходного дня
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-adventure-light to-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center justify-center"
              >
                <Icon name="Image" className="text-gray-400" size={24} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-adventure-orange text-white mb-4">
              Отзывы
            </Badge>
            <h2 className="text-4xl font-montserrat font-bold text-adventure-charcoal mb-6">
              Что говорят наши гости
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные истории семей, которые открыли для себя новые места
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Потрясающая поездка в Кудыкину гору! Дети были в восторге от дракона, 
                а мы с мужем наслаждались красивыми пейзажами. Обязательно поедем еще!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-adventure-green rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-montserrat font-medium">Елена М.</p>
                  <p className="text-sm text-gray-500">Семья с двумя детьми</p>
                </div>
              </div>
            </Card>

            {/* Review 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Отлично организованная поездка к водохранилищу. Рыбалка удалась, 
                жена с детьми купались. Всем хватило развлечений!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-adventure-orange rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-montserrat font-medium">Андрей К.</p>
                  <p className="text-sm text-gray-500">Активный отдых</p>
                </div>
              </div>
            </Card>

            {/* Review 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Усадьба Рамонь произвела неизгладимое впечатление. Красивая архитектура, 
                интересная экскурсия. Получили массу удовольствия!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-adventure-green rounded-full flex items-center justify-center">
                  <Icon name="User" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-montserrat font-medium">Мария В.</p>
                  <p className="text-sm text-gray-500">Культурный отдых</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-20 bg-adventure-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-adventure-orange text-white mb-4">
                Контакты
              </Badge>
              <h2 className="text-4xl font-montserrat font-bold mb-6">
                Готовы к приключению?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Свяжитесь с нами для бронирования тура или получения консультации
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="text-adventure-orange" size={24} />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-300">+7 (4742) 123-456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="text-adventure-orange" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@myedem-lipetsk.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="text-adventure-orange" size={24} />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-300">г. Липецк, ул. Советская, 45</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Забронировать тур
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    placeholder="+7 (___) ___-____"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующий маршрут</label>
                  <Textarea 
                    placeholder="Расскажите, куда хотели бы поехать..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-adventure-orange hover:bg-adventure-orange/90 text-white py-3"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-adventure-charcoal/90 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Compass" className="text-adventure-orange" size={24} />
                <span className="text-xl font-montserrat font-bold">Мы Едем</span>
              </div>
              <p className="text-gray-300">
                Туристическое бюро семейных путешествий выходного дня из Липецка
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Туры выходного дня</li>
                <li>Семейные маршруты</li>
                <li>Экскурсии</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Кудыкина гора</li>
                <li>Воронежское водохранилище</li>
                <li>Усадьба Рамонь</li>
                <li>Другие маршруты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (4742) 123-456</li>
                <li>info@myedem-lipetsk.ru</li>
                <li>г. Липецк, ул. Советская, 45</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Мы Едем. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}