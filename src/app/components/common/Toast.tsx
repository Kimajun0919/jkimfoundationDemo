import { useToast } from '../../../utils/toast';
import { X, CheckCircle } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          <CheckCircle className="toast-icon" size={20} color="#2e7d32" />
          <div className="toast-content">
            <div className="toast-title">{toast.title}</div>
            {toast.description && (
              <div className="toast-description">{toast.description}</div>
            )}
          </div>
          <X
            className="toast-close"
            size={16}
            onClick={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}
