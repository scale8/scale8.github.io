# Manage your Account

## Displaying the menu

In order to manage your account, please select the button in the bottom left of the page and select "Manage Account".
Once selected you should be presented with a new window with a series of menu options on the left.

![Manage Account](/img/organization/org-manage-account.png)

## Personal information

We only hold the minimum amount of personal information on you. 
These details will be used only in correspondence with you.
To update you name, navigate to the "Manage Account" window as described above and select "Personal Info".
Once done, select "Update Personal Info" to commit your changes.
These changes should propagate instantly throughout the system.

## Change password

During the sign-up process, if you chose to generate the password automatically,
you should have received an email from us containing your password.
Should you not be able to find the email, or you have forgotten your password, go to the login screen and 
select "Forgot password?" in the bottom right of the form.
In order to update your password, navigate to the "Manage Account" window and select "Change Password".
Please note that passwords in our system have a minimum length of 6 characters.

<Warn>

We strongly recommend that you set-up two-factor-authentication to help secure your account. As mentioned in our terms of service, we can't be held liable for poor security on your account.

</Warn>

## GitHub account

It is possible to link your GitHub account with our authentication.
During the sign-up process, if you chose to use your GitHub account, you can keep logging in using GitHub instead of providing
username and password.
If you did not link your GitHub account during sign-up, you can do it by opening the "Manage Account" window and select "GitHub Account".

## 2-Factor authentication

You can enable two-factor authentication for your account to increase security. 
The second verification will require a Time-based One-time Password (TOTP),
this kind of password can be generated with a number of apps that implement the TOTP algorithm,
the most popular is Google Authenticator.
You can enable 2-Factor authentication by opening the "Manage Account" window and select "2-Factor Auth".

## Manage API tokens

If you need access to our API, you will need to authenticate via uid and token as described in the
[API Documentation](https://docs.scale8.com/#/APIToken).

You can find the access details on the "API Token" tab of the "Manage Account" window. 

Here you can also **refresh** the API Token if necessary .

<Warn>

Changing your token will impact any existing API integrations.
Please make sure you update your API integrations after refreshing the token.

</Warn>