# Installing Tag Manager
## Create an account

To use our Tag Manager service you'll first need to create an account. If this is your first time using our Tag Manager service then you should be eligible for our 30-day free trial.

If you don't currently have an account please [sign-up](/sign-up/tag-manager) for an account. We only ask for the minimum amount of information required to create your account, and we'll never sell your personal information to third parties.

![Sign Up](/img/installing/create-account.png)

Once the form has been submitted, we'll ask you to confirm your email address. This tells us that you have access to this email address and other guarantees we don't send any further correspondence to the wrong address. Please follow the link from the email sent. The email link should return you back and present you with the instructions for adding the Tag Manager script to your website.

## Add script to your website

![Install Tags](/img/installing/install-tags-registration.png)

After email verification, the system will automatically create your first application along with its production environment and instruct you to install the Tag Manager code, you can now follow the procedures and suggestions described in [Installing the Tag Manager](/docs/creating-application#installing-the-tag-manager).

## 3rd party platform integrations

### Wordpress

To Install the Tag Manager code in Wordpress you must first install and activate [Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/) plugin.

- Upon activation, you need to visit **Settings » Insert Headers and Footers**.
- Paste your Tag Manager installation code in the header section
- Click on the save button to store your settings.

<Info>

If you do not wish to install a plugin, then you can also add the Tag Manager code in your WordPress theme or Child theme. Simply edit the header.php template and paste the code right after <**body**> tag.

</Info>

### Squarespace

<Warn>

JavaScript code injection is a premium Squarespace feature available only on business and commerce subscription plans.

</Warn>

To Install the Tag Manager code in your Squarespace website you should use the [Code injection](https://support.squarespace.com/hc/en-us/articles/205815908) feature.

- In the **Home Menu**, click on **Settings » Advanced » Code Injection**.
- Paste your Tag Manager installation code on the "**Header**" text box.
- Click **Save**.

### Wix

<Warn>

JavaScript code injection is a premium Wix feature so you need to upgrade your Wix account to a paid subscription plan.

</Warn>

To Install the Tag Manager code in your Wix website you should use the [Tracking Tools](https://support.wix.com/en/article/embedding-custom-code-to-your-site) feature.

- In your site's dashboard, click on **Settings » Custom Code » Advanced**.
- Click on the "**+ Add Custom Code**" button at the top right.
- Paste your Tag Manager installation code.
- Enter a name the code, suggestion: "**Scale8 Tag Manager**"
- Choose "**All Pages**" as **Add Code to Pages** option.
- Select "**Head**" as **Place Code in** option.
- Click **Apply**.

### Shopify

You can install the Tag Manager code to your Shopify website by editing the code in your theme file.

- From your Shopify admin, go to **Online Store » Themes**.
- Click **Actions** > **Edit code**.
- In the "**Layout**" section of the theme code editor select `theme.liquid`.
- In the `theme.liquid` file paste your Tag Manager installation code before the closing `</head>` tag and save.

### MediaWiki

You can install the Tag Manager code to your MediaWiki using the [HeadScript extension](https://www.mediawiki.org/wiki/Extension:HeadScript).

To configure the head script, add the following to "LocalSettings.php" after the installation line:

```php
$wgHeadScriptCode = <<<'START_END_MARKER'
--your-code--
START_END_MARKER;
```

Replacing the string "**--your-code--**" with your Tag Manager installation code.

## Testing your installation
You can find instructions on how to test your installation in the section [Troubleshooting your installation](/docs/creating-application#troubleshooting-your-installation).

