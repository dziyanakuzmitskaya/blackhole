<template>
  <AccountLayout title="Change Password">
    <template #form>
      <ResetPasswordForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
</script>
