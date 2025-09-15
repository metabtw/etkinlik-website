'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, Clock, MapPin, Users, Star, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900/90 to-pink-900/80" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const positions = [
              { left: '10%', top: '20%' },
              { left: '85%', top: '15%' },
              { left: '25%', top: '80%' },
              { left: '70%', top: '60%' },
              { left: '45%', top: '30%' },
              { left: '90%', top: '75%' },
              { left: '15%', top: '45%' },
              { left: '60%', top: '25%' },
              { left: '35%', top: '70%' },
              { left: '80%', top: '40%' },
              { left: '20%', top: '90%' },
              { left: '75%', top: '10%' },
              { left: '50%', top: '55%' },
              { left: '95%', top: '85%' },
              { left: '5%', top: '65%' },
              { left: '65%', top: '35%' },
              { left: '40%', top: '95%' },
              { left: '85%', top: '50%' },
              { left: '30%', top: '15%' },
              { left: '55%', top: '75%' }
            ];
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                style={{
                  left: positions[i]?.left || '50%',
                  top: positions[i]?.top || '50%',
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Tech Future
                  <span className="block text-5xl lg:text-7xl mt-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    2025
                  </span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-xl bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/20"
              >
                <Calendar className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">15-16 Mart 2025</span>
                <MapPin className="w-6 h-6 text-pink-400 ml-4" />
                <span className="text-white font-semibold">İstanbul</span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl lg:text-3xl mb-8 text-gray-200 font-light leading-relaxed"
              >
                Geleceği Birlikte
                <span className="block font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  İnşa Ediyoruz
                </span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-2xl shadow-purple-500/25 px-8 py-4 text-lg font-semibold">
                    🎫 Bilet Al
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white backdrop-blur-sm bg-slate-800/30 px-8 py-4 text-lg font-semibold">
                    📋 Detayları Gör
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="flex justify-center relative"
            >
              <div className="relative">
                {/* Main tech visual */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-500/30"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.4),rgba(219,39,119,0.4),rgba(59,130,246,0.4))] opacity-50 rounded-full" />
                  <div className="text-8xl z-10 filter drop-shadow-2xl">🚀</div>
                  
                  {/* Orbiting elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-white/80 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: `${120 + i * 20}px 0px`,
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Floating tech icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -left-8 text-4xl bg-slate-800/80 backdrop-blur-sm rounded-full p-4 border border-purple-500/30"
                >
                  🤖
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -right-8 text-4xl bg-slate-800/80 backdrop-blur-sm rounded-full p-4 border border-pink-500/30"
                >
                  ⚡
                </motion.div>
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -right-12 text-4xl bg-slate-800/80 backdrop-blur-sm rounded-full p-4 border border-blue-500/30"
                >
                  🌐
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Etkinlik Hakkında
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Tech Future 2025, teknoloji dünyasının en yenilikçi fikirlerini ve gelecek vizyonlarını bir araya getiren prestijli bir etkinliktir. 
                Yapay zeka, blockchain, metaverse ve sürdürülebilir teknolojiler konularında dünya çapında uzmanlarla buluşacaksınız.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>İstanbul Kongre Merkezi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>500+ Katılımcı</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>20+ Dünya Çapında Konuşmacı</span>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20"
            >
              <div className="text-6xl mb-4 text-center">🏙️</div>
              <h3 className="text-2xl font-bold text-center mb-4">İstanbul'da Buluşuyoruz</h3>
              <p className="text-gray-300 text-center">
                Teknolojinin kalbi İstanbul'da, geleceğin şekillendiği bu özel etkinlikte yerinizi alın.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Konuşmacılar
            </h2>
            <p className="text-xl text-gray-300">Teknoloji dünyasının öncü isimleri</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Dr. Sarah Chen', 
                title: 'AI Research Director, Google', 
                avatar: '👩‍💻',
                expertise: 'Artificial Intelligence',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                name: 'Mark Rodriguez', 
                title: 'Blockchain Lead, Meta', 
                avatar: '👨‍💼',
                expertise: 'Blockchain Technology',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                name: 'Lisa Wang', 
                title: 'CTO, Tesla', 
                avatar: '👩‍🔬',
                expertise: 'Autonomous Systems',
                gradient: 'from-green-500 to-emerald-500'
              },
              { 
                name: 'Ahmed Hassan', 
                title: 'Quantum Computing Expert', 
                avatar: '👨‍🔬',
                expertise: 'Quantum Computing',
                gradient: 'from-indigo-500 to-purple-500'
              },
              { 
                name: 'Elena Petrov', 
                title: 'Cybersecurity Specialist', 
                avatar: '👩‍💻',
                expertise: 'Cybersecurity',
                gradient: 'from-red-500 to-pink-500'
              },
              { 
                name: 'David Kim', 
                title: 'Metaverse Architect', 
                avatar: '👨‍🎨',
                expertise: 'Virtual Reality',
                gradient: 'from-orange-500 to-yellow-500'
              }
            ].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                   <CardContent className="p-0">
                     <div className="relative overflow-hidden">
                       <motion.div
                         className={`w-full h-64 bg-gradient-to-br ${speaker.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                         whileHover={{ scale: 1.1 }}
                       >
                         <div className="text-8xl filter drop-shadow-2xl">{speaker.avatar}</div>
                       </motion.div>
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                       <div className="absolute bottom-4 left-4 right-4">
                         <span className="inline-block px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm rounded-full mb-2">
                           {speaker.expertise}
                         </span>
                       </div>
                     </div>
                     <div className="p-6 text-center">
                       <h3 className="text-xl font-bold mb-2 text-white">{speaker.name}</h3>
                       <p className="text-gray-400 mb-4">{speaker.title}</p>
                       <div className="flex justify-center gap-2">
                         <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white hover:bg-purple-600">
                           <Linkedin className="w-4 h-4" />
                         </Button>
                         <Button variant="ghost" size="sm" className="text-blue-400 hover:text-white hover:bg-blue-600">
                           <Twitter className="w-4 h-4" />
                         </Button>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Program Akışı
            </h2>
            <p className="text-xl text-gray-300">İki gün boyunca teknoloji dolu program</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { time: '09:00', title: 'Kayıt ve Kahvaltı', icon: '☕' },
                { time: '10:00', title: 'Açılış Konuşması: Geleceğin Teknolojileri', icon: '🎤' },
                { time: '11:30', title: 'AI ve Machine Learning Paneli', icon: '🤖' },
                { time: '13:00', title: 'Öğle Yemeği ve Networking', icon: '🍽️' },
                { time: '14:30', title: 'Blockchain ve Web3 Atölyesi', icon: '⛓️' },
                { time: '16:00', title: 'Metaverse ve Sanal Gerçeklik', icon: '🥽' },
                { time: '17:30', title: 'Kapanış ve Ödül Töreni', icon: '🏆' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Clock className="w-5 h-5" />
                      <span className="font-mono text-lg">{item.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sponsorlar
            </h2>
            <p className="text-xl text-gray-300">Etkinliğimizi destekleyen değerli partnerlerimiz</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                name: 'Microsoft',
                logo: (
                  <svg viewBox="0 0 23 23" className="w-12 h-12">
                    <path fill="#f25022" d="M1 1h10v10H1z"/>
                    <path fill="#00a4ef" d="M12 1h10v10H12z"/>
                    <path fill="#7fba00" d="M1 12h10v10H1z"/>
                    <path fill="#ffb900" d="M12 12h10v10H12z"/>
                  </svg>
                )
              },
              {
                name: 'Google',
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )
              },
              {
                name: 'Apple',
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#ffffff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )
              },
              {
                name: 'Meta',
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#1877f2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              },
              {
                name: 'Tesla',
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#cc0000" d="M12 5.362L8.16 15h7.68L12 5.362zM12 0l4.9 12H24l-4.9-12H12zm0 0L7.1 12H0l4.9-12H12z"/>
                  </svg>
                )
              },
              {
                name: 'OpenAI',
                logo: (
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <path fill="#412991" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                )
              }
            ].map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center grayscale hover:grayscale-0 group"
              >
                <div className="mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {sponsor.logo}
                </div>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Biletini Hemen Al
            </h2>
            <p className="text-xl text-gray-300">Erken kayıt fırsatlarını kaçırma!</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Basic', price: '₺299', features: ['1 Günlük Erişim', 'Kahvaltı Dahil', 'Sertifika'] },
              { name: 'Pro', price: '₺499', features: ['2 Günlük Erişim', 'Tüm Öğünler', 'Networking Etkinlikleri', 'Sertifika'], popular: true },
              { name: 'VIP', price: '₺799', features: ['2 Günlük Erişim', 'VIP Lounge', 'Konuşmacılarla Buluşma', 'Özel Hediyeler', 'Sertifika'] }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </div>
                )}
                <Card className={`bg-slate-800/50 border-2 ${plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-slate-700'} hover:border-purple-500/50 transition-all duration-300`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-purple-400">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : 'bg-slate-700 hover:bg-slate-600'} text-white border-0`}>
                      Satın Al
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-300">Merak ettiğiniz her şey</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Etkinlik hangi tarihte ve nerede gerçekleşecek?',
                  answer: 'Tech Future 2025, 15-16 Mart 2025 tarihlerinde İstanbul Kongre Merkezi\'nde gerçekleşecektir.'
                },
                {
                  question: 'Bilet fiyatları nelerdir?',
                  answer: 'Basic bilet ₺299, Pro bilet ₺499 ve VIP bilet ₺799 olarak fiyatlandırılmıştır. Erken kayıt indirimleri mevcuttur.'
                },
                {
                  question: 'Etkinlikte hangi konular işlenecek?',
                  answer: 'Yapay zeka, blockchain, metaverse, sürdürülebilir teknolojiler, siber güvenlik ve quantum computing konuları ele alınacaktır.'
                },
                {
                  question: 'Sertifika verilecek mi?',
                  answer: 'Evet, etkinliğe katılan tüm katılımcılara dijital katılım sertifikası verilecektir.'
                },
                {
                  question: 'İptal ve iade politikası nedir?',
                  answer: 'Etkinlikten 30 gün öncesine kadar %100, 15 gün öncesine kadar %50 iade yapılmaktadır.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                  <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Future 2025
              </h3>
            </div>
            
            <div className="flex gap-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
            <p>© 2025 Tech Future. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
