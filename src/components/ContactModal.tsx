import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import ContactForm from './ContactForm'

interface ContactModalProps {
  children: React.ReactNode
}

export default function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-0">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8 p-0"
          >
            <Icon name="X" size={20} />
          </Button>
          <ContactForm isModal onClose={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  )
}