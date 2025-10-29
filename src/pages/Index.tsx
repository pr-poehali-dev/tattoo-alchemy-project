import { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const portfolioWorks = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/d99aecd3-3bdb-4d4a-80b4-a09c7da75d24.jpg',
      title: 'Реализм',
      category: 'Портрет'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/79c9a989-835f-4854-b78e-7f4460b984e7.jpg',
      title: 'Гравюра',
      category: 'Этчинг'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/85228e9e-f379-4cca-80ca-3dd5283c68e8/files/dfdb207f-ac46-4cfb-a915-c8fd722ecb19.jpg',
      title: 'Киберсигилизм',
      category: 'Техномагия'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Ануфрович Людмила',
      specialty: 'Все стили татуировки',
      experience: '1 год',
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tribal-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M100,20 Q120,40 100,60 Q80,40 100,20 Z M100,80 L120,100 L100,140 L80,100 Z M40,100 Q60,120 40,140 Q20,120 40,100 Z M160,100 Q180,120 160,140 Q140,120 160,100 Z" 
                    fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20"/>
              <circle cx="100" cy="100" r="3" fill="currentColor" className="text-red-600/40"/>
              <path d="M100,150 L90,180 L110,180 Z" fill="currentColor" className="text-white/15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tribal-pattern)"/>
        </svg>
        
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,30 Q130,60 100,90 Q70,60 100,30 M100,110 L130,140 L100,180 L70,140 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" 
                    strokeDasharray="5,5" className="text-white/30"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 left-10 w-80 h-80 opacity-15 rotate-45">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,20 L120,80 L180,80 L130,120 L150,180 L100,140 L50,180 L70,120 L20,80 L80,80 Z" 
                  fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" 
                    className="text-red-600/30"/>
          </svg>
        </div>
        
        <div className="absolute top-1/3 left-1/4 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,50 Q150,75 150,100 Q150,125 100,150 Q50,125 50,100 Q50,75 100,50" 
                  fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30"/>
            <path d="M100,70 L100,130 M70,100 L130,100" stroke="currentColor" strokeWidth="1" className="text-red-700/40"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-red-950/8 rounded-full blur-3xl"></div>
      </div>
      
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TATTOO ALCHEMY</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-red-400 transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-red-400 transition-colors">Портфолио</a>
            <a href="#artists" className="hover:text-red-400 transition-colors">Мастера</a>
            <a href="#services" className="hover:text-red-400 transition-colors">Услуги</a>
            <a href="#booking" className="hover:text-red-400 transition-colors">Запись</a>
            <a href="#contacts" className="hover:text-red-400 transition-colors">Контакты</a>
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
            <Button size="lg" className="px-8" onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}>
              Записаться на сеанс
            </Button>
            <Button size="lg" variant="outline" className="px-8" onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}>
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center scroll-animate opacity-0">
            <Icon name="Award" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">1 год</h3>
            <p className="text-muted-foreground">На рынке</p>
          </div>
          <div className="text-center scroll-animate opacity-0" style={{animationDelay: '0.1s'}}>
            <Icon name="Users" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">2000+</h3>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div className="text-center scroll-animate opacity-0" style={{animationDelay: '0.2s'}}>
            <Icon name="Star" size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl mb-2">1 мастер</h3>
            <p className="text-muted-foreground">Профессионал</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 scroll-animate opacity-0">ПОРТФОЛИО</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioWorks.map((work, index) => (
              <Card key={work.id} className="overflow-hidden group cursor-pointer bg-card border-border scroll-animate opacity-0" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                      <p className="text-red-200">{work.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-red-800 hover:bg-red-950/30 hover:text-red-200">
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 scroll-animate opacity-0">НАШ МАСТЕР</h2>
          <div className="max-w-md mx-auto">
            {artists.map((artist) => (
              <Card key={artist.id} className="bg-card border-border p-6 scroll-animate opacity-0">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-muted-foreground mb-2">{artist.specialty}</p>
                <div className="flex items-center gap-2 text-sm text-red-300">
                  <Icon name="Clock" size={16} className="text-red-400" />
                  <span>Опыт: {artist.experience}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 scroll-animate opacity-0">УСЛУГИ И ЦЕНЫ</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border p-6 hover:bg-red-950/20 hover:border-red-900/50 transition-all scroll-animate opacity-0" style={{animationDelay: `${index * 0.05}s`}}>
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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 scroll-animate opacity-0">ЗАПИСЬ НА СЕАНС</h2>
          <Card className="bg-card border-border p-8 scroll-animate opacity-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-background border-border focus:border-red-800 focus:ring-red-900/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-background border-border focus:border-red-800 focus:ring-red-900/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-background border-border focus:border-red-800 focus:ring-red-900/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Опишите вашу идею</label>
                <Textarea 
                  placeholder="Расскажите о желаемой татуировке, стиле, размере и месте нанесения..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="bg-background border-border focus:border-red-800 focus:ring-red-900/50"
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
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 scroll-animate opacity-0">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8 scroll-animate opacity-0">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Архангельск, Троицкий пр-кт, д. 119</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 996 276-24-50</p>
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
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-card border-border overflow-hidden scroll-animate opacity-0" style={{animationDelay: '0.1s'}}>
              <div className="w-full h-full min-h-[400px] bg-secondary/50 flex items-center justify-center">
                <Icon name="Map" size={64} className="text-muted-foreground" />
              </div>
            </Card>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-red-800 hover:bg-red-950/40 hover:border-red-600 transition-all">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-red-800 hover:bg-red-950/40 hover:border-red-600 transition-all">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-red-800 hover:bg-red-950/40 hover:border-red-600 transition-all">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-red-950/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Tattoo Alchemy. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;