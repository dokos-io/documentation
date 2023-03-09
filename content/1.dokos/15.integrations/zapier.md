---
title: Zapier Integration
---

# Zapier application

Zapier is an online platform helping non technical users connecting multiple applications together.

## Install the Zapier application

### Fetch the redirection URI

> Go to zapier.com and login or create a new account

1. In the `My Apps` section, click in `Connect a new account` and search for `dokos`  
![zapier_new_connection.png](/content/integrations/zapier/zapier_new_connection.png)

1. In the popup, copy the redirection address (Redirect URI) displayed above the Client ID and Client Secret fields.
   It is the same address, so you can copy it only once.  
![zapier_auth.png](/content/integrations/zapier/zapier_auth.png)

1. Keep the popup open to finish the connexion after step 1.2.

### Register a new connexion on dokos

> Open dokos and go o module `Integrations`

1. Create a new `OAuth Client` document, give a name to the client application (E.g. Zapier) and paste the redirection URI copied earlier in fields `Redirection URIs` and `Default redirection URI`.  

![dokos_oauth.png](/content/integrations/zapier/dokos_oauth.png)

1. Save and dokos will automatically generate the two missing informations to finish your connection to Zapier: The Client ID and Client Secret.
Copy these two keys.  

![dokos_client_keys.png](/content/integrations/zapier/dokos_client_keys.png)

### Setup social login keys

> To allow OAuth2 integrations types, at least one Frappe social login key is required.

1. Go to `Integrations > Social Login Key`
1. Create a new social login key
1. In the field **Social Login Provider**, select `Frappe`
1. In the field **Base URL** register the base URL of your site without any subdomain.
  E.g. If your URL is `https://demo.dokos.io`, register `https://dokos.io`  

![frappe_social_login.png](/content/integrations/zapier/frappe_social_login.png)  

5. Save

### Finish Zapier authentication

> Go back to Zapier and open the window from section 1.1. again.

- **Base URL**: Register the Base URL of your dokos site. E.g. `https://demo.dokos.io`
- **Client ID**: Paste the corresponding key generated at step 1.2.
- **Client Secret**: Paste the corresponding key generated at step 1.2.

1. Click on `Yes, Continue`
1. You will be redirected to your dokos site to validate the authentication. Click on `Allow`

:tada: Your Zapier application is now connected to your dokos site.  
You can create your first Zap.

### Create a Zap

The **dokos** Zapier application allows the creation of two types of interactions:

- Triggering a Zap based on an event affecting a document
- Searching or creating an document

### Generating a Zap

To generate a new Zap, select the **dokos** application in the Zap editor. 

1. In the **Choose Trigger Event** field, select **Document events**.
1. Select an account to use. It will probably be the account created at step 1.
1. In the **Customize Document** section, select:
    - The **DocType** (document type) used to trigger a Zap
    - The event (**Trigger Event**) triggering this Zap.
    This event can be one of the following:
        - **After insert**: After the creation of a document
        - **On change**: After the modification of a document (can be triggered simultaneously with `On update` or `On submit`)
        - **On update**: After saving the document
        - **On submit**: After the submission of the document
        - **On update after submit**: After saving an already submitted document. Possible only if some fields are allowed to be edited after submission.
        - **On cancel**: After cancellation of the document
        - **On trash**: After deletion of the document
    - The fields to send to Zapier (**Webhook Data**)
      Click on the + button to add an additional field

::alert{type=info}
The Zapier integration creates new Webhooks in dokos.  
You can find them in `Integrations > Webhooks`.
::


You can then save and create you action with another Zapier application or with the dokos application.

### Triggering an action on dokos

There are two types of actions available on dokos: **Create Document** or **Find Document**

#### Create a document

Once you have selected the type of document to create, choose some values for the mandatory fields and test you Zap.
A new document should be created on your dokos site.

#### Find a document

If you want to find a document, you can define 3 parameters:
    1. The maximum number of documents to fetch
    2. The name of the fields to fetch
    3. A filter to find your documents
       If you want to find a specific document, think about filtering per ID (Name in dokos).

By checking `Create dokos Document if it doesn't exist yet?` you autorize Zapier to create a new document if it doesn't find the document matching your filters.

Once your document found or created, you can go to the next step and reuse it in another Zap.

### Data format

#### Dates
When you send a field of type **Date** or **Datetime**, you need to use the following formats:

- **Date**: `YYYY-MM-DD`
  E.g. 2019-11-30
- **Datetime**: `YYYY-MM-DD HH:mm:ss`
  E.g. 2019-11-30 08:30:00

You can use the [Zapier Formatter](https://zapier.com/help/create/format/modify-date-formats-in-zaps) tool if needed.
For the **Datetime** format, you can select the option "Use a Custom Value":  

![zapier_datetime.png](/content/integrations/zapier/zapier_datetime.png)

#### Arrays

The application doesn't yet autorize sending arrays in document objects.
Please send us an email at [help@dokos.io](mailto=help@dokos.io) if this limitation causes you integration issues.
