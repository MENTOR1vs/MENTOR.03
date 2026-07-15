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

export const showConfirmationAlert = ({
  title = 'Confirm action',
  text = 'This action will be applied to your account.'
} = {}) => {
  return Swal.fire({
    ...blueTheme,
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Continue',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    return result.isConfirmed;
  });
};

export const showTextInputAlert = ({
  title = 'Enter text',
  text = 'Please provide the requested value.',
  inputLabel = 'Value',
  inputPlaceholder = 'Type here',
  inputValue = '',
  confirmButtonText = 'Save',
  validationMessage = 'Please enter a value.'
} = {}) => {
  return Swal.fire({
    ...blueTheme,
    title,
    text,
    input: 'text',
    inputLabel,
    inputPlaceholder,
    inputValue,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: 'Cancel',
    preConfirm: (value) => {
      const trimmedValue = value?.trim();

      if (!trimmedValue) {
        Swal.showValidationMessage(validationMessage);
        return false;
      }

      return trimmedValue;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      return result.value;
    }

    return null;
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

export const showAcceptAlert = (topic, mentorName) => {
  return showConfirmationAlert({
    title: 'Accept mentorship request',
    text: `Accept "${topic}" from ${mentorName}? Schedule a session date below.`
  });
};

export const showRejectAlert = (topic) => {
  return showConfirmationAlert({
    title: 'Reject mentorship request',
    text: `Are you sure you want to reject "${topic}"? This action cannot be undone.`
  });
};

export const showCompleteAlert = (topic) => {
  return showConfirmationAlert({
    title: 'Mark session as completed',
    text: `Confirm that you have completed the mentorship session for "${topic}".`
  });
};

export const showSaveProfileAlert = () => {
  return showConfirmationAlert({
    title: 'Update profile',
    text: 'Confirm to save your profile changes.'
  });
};

export const showCreateGoalAlert = () => {
  return showConfirmationAlert({
    title: 'Create new goal',
    text: 'Confirm to create this personal goal.'
  });
};
