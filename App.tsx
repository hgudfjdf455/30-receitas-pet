
import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  Heart, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Leaf,
  PawPrint,
  Clock,
  Star,
  ShoppingBag,
  Gift
} from 'lucide-react';
import { FAQItem, Testimonial, Benefit } from './types';

// Components
const Navbar = () => (
  <nav className="py-4 px-6 flex justify-center items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
    <div className="flex items-center gap-2">
      <PawPrint className="text-green-500 w-6 h-6" />
      <span className="text-xl font-bold text-slate-900 tracking-tight">PetHealth</span>
    </div>
  </nav>
);

const SectionTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight text-slate-900 ${className}`}>
    {children}
  </h2>
);

const GreenButton: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  const handleClick = () => {
    // Dispara o Pixel do Facebook
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    // Redirecionamento via navegação real em nova aba para evitar problemas de iframe/embed
    window.open('https://pay.kiwify.com.br/Y4Cuat4?afid=pDTjfJQy', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all shadow-xl flex items-center justify-center gap-2 group w-full md:w-auto animate-pulse-card ${className}`}
    >
      {children}
    </button>
  );
};

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-slate-700 group-hover:text-green-600 transition-colors">
          {item.question}
        </span>
        {isOpen ? <ChevronUp className="text-green-500" /> : <ChevronDown className="text-slate-400" />}
      </button>
      {isOpen && (
        <p className="mt-3 text-slate-600 leading-relaxed font-regular">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent');
    }
    
    // Set current date
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR');
    setCurrentDate(formattedDate);
  }, []);

  const deliverables = [
    <><span className="font-bold text-green-600">30 Receitas</span> naturais e nutritivas</>,
    <><span className="font-bold text-green-600">Ingredientes simples</span> que você tem em casa</>,
    <><span className="font-bold text-green-600">Preparo rápido</span> em poucos minutos</>,
    <><span className="font-bold text-green-600">Para cães e gatos</span> de todas as idades</>,
    <><span className="font-bold text-green-600">Foco total</span> em saúde e bem-estar</>
  ];

  const benefits: Benefit[] = [
    {
      title: "Menos Ração Industrial",
      description: "Reduza o consumo de conservantes e corantes artificiais que prejudicam a saúde a longo prazo.",
      icon: <Leaf className="w-8 h-8 text-green-500" />
    },
    {
      title: "Melhor Digestão",
      description: "Alimentos naturais são mais fáceis de digerir, evitando gases, vômitos e desconfortos.",
      icon: <Sparkles className="w-8 h-8 text-green-500" />
    },
    {
      title: "Mais Energia",
      description: "Veja seu pet com a vitalidade de um filhote novamente através da nutrição correta.",
      icon: <Zap className="w-8 h-8 text-green-500" />
    },
    {
      title: "Pelo Bonito e Brilhante",
      description: "A saúde que vem de dentro para fora, refletindo diretamente na pelagem do seu amigo.",
      icon: <Sparkles className="w-8 h-8 text-green-500" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Mariana Silva",
      text: "Meu Luke tinha muita alergia com rações premium. Comecei as receitas e em 15 dias a pele dele mudou completamente. Recomendo demais!",
      image: "https://i.imgur.com/n9sZzgs.png"
    },
    {
      name: "Carlos Eduardo",
      text: "Eu achava que dar comida natural era caro e difícil. Com o ebook vi que é super simples e meu gato amou cada receita. Ele está muito mais ativo.",
      image: "https://i.imgur.com/hf57haN.png"
    },
    {
      name: "Beatriz Costa",
      text: "Melhor investimento que fiz! As receitas são rápidas e eu sei exatamente o que meu pet está comendo agora. Paz de espírito total.",
      image: "https://i.imgur.com/uDsWwkf.png"
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Serve para cães e gatos?",
      answer: "Sim! O ebook contém receitas balanceadas especificamente para as necessidades de ambos os animais."
    },
    {
      question: "As receitas são fáceis?",
      answer: "Absolutamente. Selecionamos apenas receitas que usam ingredientes do dia a dia e que podem ser preparadas em poucos minutos."
    },
    {
      question: "Em quanto tempo recebo?",
      answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o material."
    },
    {
      question: "É um arquivo PDF?",
      answer: "Sim, você recebe um ebook em formato PDF que pode ser aberto em qualquer dispositivo."
    },
    {
      question: "Funciona no celular?",
      answer: "Com certeza! Você pode ler e seguir as receitas diretamente do seu smartphone, tablet ou computador."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fita de Oferta no Topo */}
      <div className="bg-amber-400 py-2 px-4 text-center text-amber-950 text-sm font-bold flex items-center justify-center gap-2 z-[60]">
        <Clock className="w-4 h-4" />
        <span>OFERTA VÁLIDA SOMENTE HOJE ({currentDate})</span>
      </div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-teal-50 pt-12 pb-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-10">
            {/* Pré-título persuasivo */}
            <p className="text-green-600 font-bold text-lg md:text-xl mb-2 uppercase tracking-widest">
              Transforme a vida do seu melhor amigo com Alimentação Natural
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6 tracking-tight">
              30 Receitas Saudáveis para Pets
            </h1>
            
            {/* Imagem do produto maior */}
            <div className="mb-10 flex justify-center md:justify-start">
              <img 
                src="https://i.imgur.com/eZoXdEv.png" 
                alt="30 Receitas Saudáveis para Pets" 
                className="w-full max-w-[550px] rounded-2xl shadow-xl transform transition-all duration-300"
              />
            </div>

            {/* Subheadline Atualizada */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 font-regular leading-relaxed">
              Com essas 30 receitas simples, você cuida do bem-estar, da energia e da felicidade do seu pet em casa.
            </p>
            <GreenButton>
              Quero Cuidar Melhor do Meu Pet Agora 🐾
            </GreenButton>
            <p className="mt-4 text-sm text-slate-400 flex items-center justify-center md:justify-start gap-1 font-regular">
              <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
            </p>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
              alt="Cachorro Feliz" 
              className="rounded-3xl shadow-2xl w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500 aspect-square"
            />
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle>O que você vai receber hoje</SectionTitle>
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-inner">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://i.imgur.com/ywLhivj.png" 
                  alt="Mockup Ebook 30 Receitas" 
                  className="relative rounded-xl shadow-lg w-full max-w-[320px] mx-auto border border-white"
                />
              </div>
              <ul className="space-y-4">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg font-regular">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como Essas Receitas Vão Melhorar a Vida do Seu Pet */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Como Essas Receitas Vão Melhorar a Vida do Seu Pet 🐾</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-regular text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <GreenButton className="md:inline-flex">
              Garantir Meu Acesso Agora 🐾
            </GreenButton>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Quem já mudou a vida do seu pet</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
                <img src={test.image} alt={test.name} className="w-20 h-20 rounded-full mb-6 border-4 border-white shadow-sm object-cover" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-700 font-regular italic mb-6 leading-relaxed">"{test.text}"</p>
                <span className="font-bold text-slate-900">{test.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
            <div className="grid md:grid-cols-2">
              {/* Esquerda: Mockup do Produto */}
              <div className="bg-teal-50 flex items-center justify-center relative overflow-hidden min-h-[350px] md:min-h-[450px] p-0">
                <img 
                  src="https://i.imgur.com/eZoXdEv.png" 
                  alt="30 Receitas Mockup" 
                  className="w-full h-full object-contain transform scale-125 transition-transform duration-700 drop-shadow-2xl" 
                />
              </div>
              
              {/* Direita: Conteúdo e Preço */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  Tudo o que você precisa em um só lugar!
                </h3>
                
                {/* Itens da Oferta com Destaque */}
                <div className="space-y-3 mb-8">
                  {[
                    { text: "30 Receitas Exclusivas (Cães e Gatos)", type: "normal" },
                    { text: "Guia de Alimentos Permitidos", type: "normal" },
                    { text: "Dicas de Higiene e Preparo", type: "normal" },
                    { text: "Bônus: Petiscos Saudáveis", type: "bonus" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        item.type === 'bonus' 
                        ? "bg-amber-50 border border-amber-200 shadow-sm ring-2 ring-amber-100 animate-pulse" 
                        : "bg-slate-50 border border-slate-100"
                      }`}
                    >
                      {item.type === 'bonus' ? (
                        <Gift className="text-amber-500 w-6 h-6 flex-shrink-0" />
                      ) : (
                        <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={`text-slate-700 font-bold ${item.type === 'bonus' ? "text-amber-700 md:text-lg" : "text-sm md:text-base"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center md:text-left">
                  <p className="text-slate-500 text-xs font-regular line-through mb-1">De R$ 97,00 por apenas:</p>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-green-600">R$ 19,90</span>
                    <span className="text-slate-400 text-sm font-regular">Único</span>
                  </div>
                </div>

                <GreenButton className="w-full">
                  <ShoppingBag className="w-5 h-5" />
                  Quero Garantir Agora 🐾
                </GreenButton>
                
                <p className="mt-4 text-center text-[10px] md:text-xs text-slate-400 font-regular">
                  * Acesso vitalício e seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-xl border-2 border-green-100 flex flex-col items-center">
            <ShieldCheck className="w-20 h-20 text-green-500 mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sua Satisfação Garantida ou Seu Dinheiro de Volta</h2>
            <p className="text-slate-600 font-regular text-lg max-w-2xl">
              Você tem <strong>7 dias</strong> para testar as receitas. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionTitle>Perguntas Frequentes</SectionTitle>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQAccordion key={idx} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Não deixe para amanhã a saúde do seu pet</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-regular">
            Por apenas um pequeno investimento, você terá acesso a um guia que pode economizar centenas de reais em veterinários e remédios.
          </p>
          <GreenButton className="bg-green-400 hover:bg-green-500">
            Quero Começar Agora 🐾
          </GreenButton>
          <div className="mt-8 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6 text-slate-500 text-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-green-700" />
              <span className="text-lg font-bold text-slate-300">PetHealth</span>
            </div>
            <div className="flex gap-6 font-regular">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 text-center md:text-left leading-relaxed font-regular">
            <p className="mb-4">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar resultados reais.</p>
            <p>&copy; {new Date().getFullYear()} PetHealth - Todos os direitos reservados. 30 Receitas Saudáveis para Pets.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
