import { useState } from 'react';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Phone, Check, AlertCircle } from 'lucide-react';

interface PhoneCollectionModalProps {
  onSubmit: (phoneNumber: string) => void;
  onClose: () => void;
}

export function PhoneCollectionModal({ onSubmit, onClose }: PhoneCollectionModalProps) {
  const [phoneInput, setPhoneInput] = useState('');
  const [consent, setConsent] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [formattedNumber, setFormattedNumber] = useState('');

  const validatePhone = (input: string) => {
    if (!input || input.length < 10) {
      setIsValid(null);
      setFormattedNumber('');
      return;
    }

    try {
      // Try to parse with IN country code if no country code provided
      const phoneNumber = parsePhoneNumber(input.startsWith('+') ? input : `+91${input}`, 'IN');
      
      if (phoneNumber && isValidPhoneNumber(phoneNumber.number)) {
        setIsValid(true);
        // Format as E.164 without the + (e.g., 919876543210)
        setFormattedNumber(phoneNumber.number.slice(1));
      } else {
        setIsValid(false);
        setFormattedNumber('');
      }
    } catch (error) {
      setIsValid(false);
      setFormattedNumber('');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9+]/g, '');
    setPhoneInput(value);
    validatePhone(value);
  };

  const handleSubmit = () => {
    if (isValid && consent && formattedNumber) {
      onSubmit(formattedNumber);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Connect via WhatsApp
          </DialogTitle>
          <DialogDescription>
            Enter your WhatsApp number to continue the conversation on WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp Number</Label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210 or 9876543210"
                value={phoneInput}
                onChange={handlePhoneChange}
                className={`pr-10 ${
                  isValid === true
                    ? 'border-green-500 focus-visible:ring-green-500'
                    : isValid === false
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }`}
              />
              {isValid === true && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              )}
              {isValid === false && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
              )}
            </div>
            {isValid === true && formattedNumber && (
              <p className="text-sm text-green-600">
                Valid number: +{formattedNumber}
              </p>
            )}
            {isValid === false && phoneInput.length >= 10 && (
              <p className="text-sm text-red-600">
                Please enter a valid phone number
              </p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <Label
              htmlFor="consent"
              className="text-sm font-normal leading-relaxed cursor-pointer"
            >
              I agree to receive messages on WhatsApp for visa application support
            </Label>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isValid || !consent}
              className="flex-1"
            >
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Your number will only be used for this session and will not be stored permanently.
        </div>
      </DialogContent>
    </Dialog>
  );
}
