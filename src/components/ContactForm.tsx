import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface ContactFormProps {
  isModal?: boolean
  onClose?: () => void
}

export default function ContactForm({ isModal = false, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    experience: '',
    message: '',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Закрыть модал через 3 секунды
    if (isModal && onClose) {
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          experience: '',
          message: '',
          preferredTime: ''
        })
      }, 3000)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={`${isModal ? 'border-0 shadow-none' : 'border-tutor-indigo/20'} bg-tutor-gradient text-white`}>
        <CardContent className="p-12 text-center">
          <div className="w-24 h-24 bg-tutor-emerald rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={48} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold mb-4">Заявка отправлена!</h3>
          <p className="text-xl text-gray-200 mb-6">
            Александр свяжется с вами в течение 2 часов для назначения бесплатной консультации
          </p>
          <div className="space-y-2 text-gray-200">
            <p className="flex items-center justify-center">
              <Icon name="Clock" size={20} className="mr-2" />
              Ответим в течение 2 часов
            </p>
            <p className="flex items-center justify-center">
              <Icon name="Gift" size={20} className="mr-2" />
              Первая консультация бесплатно
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`${isModal ? 'border-0 shadow-none' : 'shadow-2xl border-tutor-indigo/20'} bg-white`}>
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-tutor-indigo rounded-full flex items-center justify-center mr-3">
            <Icon name="UserPlus" size={24} className="text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-tutor-violet">
            {isModal ? 'Записаться на занятия' : 'Заявка на обучение'}
          </CardTitle>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Badge className="bg-tutor-emerald text-white px-3 py-1">
            <Icon name="Gift" size={16} className="mr-1" />
            Консультация бесплатно
          </Badge>
          <Badge className="bg-tutor-indigo text-white px-3 py-1">
            <Icon name="Clock" size={16} className="mr-1" />
            Ответ в течение 2 часов
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold text-tutor-violet">
                Как вас зовут? *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold text-tutor-violet">
                Номер телефона *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold text-tutor-violet">
              Email для связи
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-base font-semibold text-tutor-violet">
                Что вас интересует? *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl">
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Веб-разработка (HTML, CSS, JavaScript, React)</SelectItem>
                  <SelectItem value="programming">Программирование (Python, JavaScript)</SelectItem>
                  <SelectItem value="computer-literacy">Компьютерная грамотность</SelectItem>
                  <SelectItem value="software-programs">Работа с программами</SelectItem>
                  <SelectItem value="consultation">Просто консультация</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold text-tutor-violet">
                Ваш уровень
              </Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl">
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Новичок (изучаю с нуля)</SelectItem>
                  <SelectItem value="basic">Базовые знания</SelectItem>
                  <SelectItem value="intermediate">Средний уровень</SelectItem>
                  <SelectItem value="advanced">Продвинутый</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-base font-semibold text-tutor-violet">
              Удобное время для занятий
            </Label>
            <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
              <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-tutor-indigo rounded-xl">
                <SelectValue placeholder="Когда вам удобно заниматься?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Утром (9:00 - 12:00)</SelectItem>
                <SelectItem value="afternoon">Днем (12:00 - 17:00)</SelectItem>
                <SelectItem value="evening">Вечером (17:00 - 21:00)</SelectItem>
                <SelectItem value="weekend">Выходные</SelectItem>
                <SelectItem value="flexible">Гибкий график</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-semibold text-tutor-violet">
              Расскажите о ваших целях
            </Label>
            <Textarea
              id="message"
              placeholder="Что вы хотите изучить? Какие у вас цели? Есть ли особые пожелания к обучению?"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="border-2 border-gray-200 focus:border-tutor-indigo rounded-xl resize-none"
            />
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="font-semibold text-tutor-violet mb-3 flex items-center">
              <Icon name="Shield" size={20} className="mr-2 text-tutor-emerald" />
              Что вас ждет после отправки заявки:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-tutor-indigo flex-shrink-0" />
                <span>Звонок в течение 2 часов</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} className="text-tutor-indigo flex-shrink-0" />
                <span>Назначение бесплатной консультации</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Target" size={16} className="text-tutor-indigo flex-shrink-0" />
                <span>Анализ ваших целей</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={16} className="text-tutor-indigo flex-shrink-0" />
                <span>Персональная программа обучения</span>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.service}
            className="w-full h-14 bg-tutor-gradient hover:opacity-90 text-white text-lg font-semibold rounded-xl border-0 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                Отправляем заявку...
              </div>
            ) : (
              <div className="flex items-center">
                <Icon name="Send" size={24} className="mr-2" />
                Записаться на бесплатную консультацию
              </div>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение информационных сообщений
          </p>
        </form>
      </CardContent>
    </Card>
  )
}