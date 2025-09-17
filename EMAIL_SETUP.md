# Email Setup Instructions

To enable direct email sending from the contact form, you need to set up Gmail SMTP credentials.

## Steps to Configure Email:

### 1. Create a Gmail App Password
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password (16 characters)

### 2. Create Environment Variables
Create a `.env.local` file in your project root with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_RECIPIENT=recipient-email@example.com
```

### 3. Set Your Recipient Email(s)
Set the `EMAIL_RECIPIENT` variable in your `.env.local` file to the email(s) where you want to receive contact form messages.

**For single recipient:**
```env
EMAIL_RECIPIENT=nesrine.hamrouni@enicar.ucar.tn
```

**For multiple recipients (comma-separated):**
```env
EMAIL_RECIPIENT=nesrine.hamrouni@enicar.ucar.tn,backup-email@gmail.com,team@company.com
```

## How It Works:
- When users submit the contact form, it sends a POST request to `/api/send-email`
- The API uses Nodemailer to send emails directly via Gmail SMTP
- Users get a success notification without opening any email client
- The email is sent to the configured recipient address

## Security Notes:
- Never commit `.env.local` to version control
- Use app passwords, not your regular Gmail password
- The API includes basic validation for required fields
