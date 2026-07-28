---
title: "ACF/Metabox/JetEngine/Toolset/Pods Integration with Ninja Tables"
description: "ACF/Metabox/JetEngine/Toolset/Pods Integration with Ninja Tables"
---

# ACF/Metabox/JetEngine/Toolset/Pods Integration with Ninja Tables

**JetEngine** is used for Custom post types and relations between these post types.
Let’s have a look at how JetEngine Integration works in Ninja Tables.
- To build a Custom Post type, you must have the **JetEngine** Plugin installed first.
- Then, you need to create a **New** **Post** **type, **or you can also work on the** **existing **Post** **Type**.
- Go to the **JetEngine dashboard →** click on **Post Types,** and **General** **Settings** will appear.

![Add New Post Type](/images/wordpress-integration/acf-metabox-jetengine/1.-Ninja-Table-JetEngine-E-7-1.webp)

- You must add some **Custom** **Fields** to the Custom Post Type.
- Give your Post Type Name and Post Type Slug and enable** **the Edit Post type/meta box link.

![General Settings](/images/wordpress-integration/acf-metabox-jetengine/2.-Ninja-Table-JetEngine-E-4-1.webp)

- Also, go to the **Labels** & **Advanced** **Settings** & give the fields name according to your needs.
- Click on the **New Meta Field** button to add Meta Fields

![New Meta Field](/images/wordpress-integration/acf-metabox-jetengine/3.-Ninja-Table-JetEngine-E-9.webp)

- There are available **Field types** where you can choose one according to your needs.

![Field Type](/images/wordpress-integration/acf-metabox-jetengine/4.-Ninja-Table-JetEngine-E-2.webp)

- To get your **Post Meta Key Name,** you need to go back to **JetEngine** **→** **Post** **Type**.
- Then, navigate to the **Meta Fields** & here, the Name/ID of every Meta Field is Meta Key. For instance, "name" is the meta key of the Name Field as follows; the date is the Meta Key of the Date field.
- Copy the **Meta Key** to use this in a further step.
- Lastly, click on the **Add Post Type **button after your configuration is done.
- Now, go to the **Jet Engine CPT** and go to the **Add New **button.

![Jet Engine CPT](/images/wordpress-integration/acf-metabox-jetengine/5.-Ninja-Table-JetEngine-E-6-1.webp)

- Here, you will see the **Meta Field** has been added. Click on the **Publish** button when you are done.

![meta field JetEngine](/images/wordpress-integration/acf-metabox-jetengine/6.-Ninja-Table-JetEngine-E-1-1.webp)

Custom Post Type will work only with WP Posts & WooCommerce Table!
- Now, navigate to the **Ninja Tables** plugin and go to a** Post Table**.

![Post Table](/images/wordpress-integration/acf-metabox-jetengine/7.-Ninja-Table-JetEngine-E-4.webp)

- You must go to the Ninja Tables **Add** **New** **Column** **button** to add a new column when using a Custom Post field in a Custom Post Type.
- Give your Column Name and other field names.
- Choose Shortcode/Computed Value or HTML from the Field Type option in Dynamic Post Data Settings. After choosing the Shortcode/Computed value field type, some customized dynamic field values will be shown below.
- In the Field Value option, for Post Meta, put your post meta key shortcode in the field.

![Dynamic Post Data Settings](/images/wordpress-integration/acf-metabox-jetengine/8.-Ninja-Table-JetEngine-E-2-1.webp)

- Go back to the **Dynamic Post Data Settings**, put your **Post Meta key,** and click on the **Add Column** button.
- Then, the custom columns will be added. It will be showing up on the table like this.

![Preview](/images/wordpress-integration/acf-metabox-jetengine/9.-Ninja-Table-JetEngine-E-8-1.webp)

By following the same steps, anyone can integrate JetEngine/ACF/Metabox/Toolset/Pods with Ninja Tables!
