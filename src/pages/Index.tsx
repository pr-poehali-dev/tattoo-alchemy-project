import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const portfolioWorks = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/599e969e-5161-4b3d-97d4-0a7c1af95175.jpg',
      title: 'Реализм',
      category: 'Рукав'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/665a817d-d958-4b9f-a6e0-2b35634ae6ae.jpg',
      title: 'Детали',
      category: 'Процесс'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/ec5dfe05-ca85-43f8-a2df-86c4dc2678ed.jpg',
      title: 'Орнамент',
      category: 'Мандала'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Александр Черный',
      specialty: 'Реализм, портреты',
      experience: '8 лет',
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/665a817d-d958-4b9f-a6e0-2b35634ae6ae.jpg'
    },
    {
      id: 2,
      name: 'Мария Грей',
      specialty: 'Орнаменты, графика',
      experience: '6 лет',
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/ec5dfe05-ca85-43f8-a2df-86c4dc2678ed.jpg'
    },
    {
      id: 3,
      name: 'Дмитрий Вулф',
      specialty: 'Блэкворк, дотворк',
      experience: '10 лет',
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/599e969e-5161-4b3d-97d4-0a7c1af95175.jpg'
    }
  ];

  const services = [
    { name: 'Маленькая татуировка', price: 'от 3 000 ₽', time: '1-2 часа' },
    { name: 'Средняя татуировка', price: 'от 8 000 ₽', time: '3-5 часов' },
    { name: 'Большая татуировка', price: 'от 15 000 ₽', time: '6+ часов' },
    { name: 'Рукав (сессия)', price: 'от 20 000 ₽', time: '8 часов' },
    { name: 'Перекрытие старой', price: 'от 10 000 ₽', time: 'индивидуально' },
    { name: 'Консультация', price: 'бесплатно', time: '30 мин' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TATTOO ALCHEMY</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-muted-foreground transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-muted-foreground transition-colors">Портфолио</a>
            <a href="#artists" className="hover:text-muted-foreground transition-colors">Мастера</a>
            <a href="#services" className="hover:text-muted-foreground transition-colors">Услуги</a>
            <a href="#booking" className="hover:text-muted-foreground transition-colors">Запись</a>
            <a href="#contacts" className="hover:text-muted-foreground transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            TATTOO<br />ALCHEMY
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Превращаем идеи в искусство на коже. Профессиональная татуировка в черно-белой эстетике.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8">
              Записаться на сеанс
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Icon name="Award" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">10+ лет</h3>
            <p className="text-muted-foreground">На рынке</p>
          </div>
          <div className="text-center">
            <Icon name="Users" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">2000+</h3>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div className="text-center">
            <Icon name="Star" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">3 мастера</h3>
            <p className="text-muted-foreground">Профессионалов</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">ПОРТФОЛИО</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioWorks.map((work) => (
              <Card key={work.id} className="overflow-hidden group cursor-pointer bg-card border-border">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      <p className="text-muted-foreground">{work.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">НАШИ МАСТЕРА</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <Card key={artist.id} className="bg-card border-border p-6">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-muted-foreground mb-2">{artist.specialty}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Clock" size={16} />
                  <span>Опыт: {artist.experience}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">УСЛУГИ И ЦЕНЫ</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:bg-secondary/50 transition-colors">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.time}</p>
                  </div>
                  <div className="text-2xl font-bold">{service.price}</div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            * Итоговая стоимость зависит от размера, сложности и времени работы
          </p>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">ЗАПИСЬ НА СЕАНС</h2>
          <Card className="bg-card border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Опишите вашу идею</label>
                <Textarea 
                  placeholder="Расскажите о желаемой татуировке, стиле, размере и месте нанесения..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="bg-background border-border"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@tattooalchemy.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Ежедневно с 12:00 до 21:00</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-card border-border overflow-hidden">
              <div className="w-full h-full min-h-[400px] bg-secondary/50 flex items-center justify-center">
                <Icon name="Map" size={64} className="text-muted-foreground" />
              </div>
            </Card>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Tattoo Alchemy. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
