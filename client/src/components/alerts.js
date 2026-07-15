import Swal from 'sweetalert2';

const blueTheme = {
  background: '#f8fbff',
  color: '#0f172a',
  iconColor: '#2563eb',
  confirmButtonColor: '#2563eb',
  cancelButtonColor: '#64748b',
  customClass: {
    popup: 'blue-alert-popup',
    confirmButton: 'blue-alert-confirm',
    cancelButton: 'blue-alert-cancel'
  }
}

export const showConfirmationAlert = () => {
  
  return Swal.fire({
    ...blueTheme,
    title: 'Confirm action',
    text: 'This action will be applied to your account.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Continue',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    
    return result.isConfirmed; 
  });
};


export const showSuccessAlert = () => {
  Swal.fire({
    ...blueTheme,
    title: 'Success!',
    text: 'Your changes were saved successfully.',
    icon: 'success',
    confirmButtonText: 'Done'
  })
}

export const showErrorAlert = () => {
  Swal.fire({
    ...blueTheme,
    title: 'Error',
    text: 'Something went wrong. Please try again.',
    icon: 'error',
    confirmButtonText: 'Try again'
  })
}

export const showWarningAlert = () => {
  Swal.fire({
    ...blueTheme,
    title: 'Warning',
    text: 'Please review the details before continuing.',
    icon: 'warning',
    confirmButtonText: 'I understand'
  })
}

export const showInfoAlert = () => {
  Swal.fire({
    ...blueTheme,
    title: 'Information',
    text: 'This is a helpful update for your dashboard.',
    icon: 'info',
    confirmButtonText: 'Great'
  })
}
