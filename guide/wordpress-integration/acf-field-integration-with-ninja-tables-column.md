---
title: "ACF Field Integration: Advanced Custom Fields in Ninja Tables"
description: "ACF Field Integration: Advanced Custom Fields in Ninja Tables"
---

# ACF Field Integration: Advanced Custom Fields in Ninja Tables

**ACF Field **is a versatile feature offered by **Ninja Tables** that improves the capacity of table creation. In this case, ACF means **Advanced Custom Fields, **which enables the table created to be more dynamic. This feature is available when the **WP Post **feature is used in the tables.

## What is ACF[](https://wpmanageninja.com/docs/ninja-tables/wp-posts-table/acf-field/#what-is-acf)

ACF refers to Advanced Custom Fields that make it easier for users to benefit from these custom fields. This feature helps to deal with users’ custom field data and then make it visible to your site’s visitors.
Technically, you can add customized information not only to posts and pages but also to categories, taxonomies, custom posts/taxonomies, users, attachments, comments, etc.

## ACF in Ninja Tables

This guide demonstrates how to use this feature in Ninja Tables.
- The first step is to install a plugin named **Advanced Custom Field** from the WordPress plugin directory. Next, go to the plugin option on the dashboard's left sidebar.
- Click on the** Add New **button from the plugin’s dashboard. Then go to the **Add Field **button after giving the title of the new field group. In the input field, enter the **Field Label** & **Field Name**.

![ACF custom fields](/images/wordpress-integration/acf-field-integration-ninja/1.-ACF-custom-fields.webp)

After that, click on the **Publish/Update** button to publish the post.

![ACF field integration field label](/images/wordpress-integration/acf-field-integration-ninja/2.-ACF-field-integration-3.webp)

Then a field group gets created. You can add new or edit, move, and delete the ACF fields from the Field Group.

![ACF demo](/images/wordpress-integration/acf-field-integration-ninja/3.-ACF-field-integration-4.webp)

Then you will notice a new field group has been added to the plugin dashboard.

![ACF new field group](/images/wordpress-integration/acf-field-integration-ninja/4.-ACF-field-integration-5.webp)

- Afterward, move to the post where you want to show your custom field using ACF.
- Then, right below the post section, you’ll notice the custom field with an input field from the post page. Add the value that you want to show on the input field on your table. Then, click on the post page’s update button after adding the value.

![Update Post](/images/wordpress-integration/acf-field-integration-ninja/5.-ACF-field-integration-7.webp)

- Then, go to the plugin Ninja Tables and click on the Post table generated using the WP Post feature. Select the post table to edit.
- You’ll then be taken to the table interface, where you press the Add Column icon.

![ACF add new column](/images/wordpress-integration/acf-field-integration-ninja/6.-ACF-field-integration-9.webp)

- You will notice a section of the internal page expanding with its option. You have to add all the required details from there. You’ll then have the Dynamic Post Data Settings option.
- A drop-down menu will be visible, where you will see the **Field Type** Option. Here, select the **Advanced Custom Fields(ACF)** option & enter the respective value in that field. Next, click on the **Add Column** button.

![Advanced Custom Fields](/images/wordpress-integration/acf-field-integration-ninja/7.-ACF-field-integration-10.webp)

*Remember that in the **Field Value** input area, enter the value from the **Name** column in the **Advanced Custom Fields** plugin dashboard according to your created **Field Group**.*

![ACF new custom column](/images/wordpress-integration/acf-field-integration-ninja/8.-ACF-field-integration-11.webp)

- After clicking the preview button, you will notice a new custom column, along with its value, gets added to the table.

![Preview](/images/wordpress-integration/acf-field-integration-ninja/9.-ACF-field-integration-12.webp)

This is how you can use the **Advanced Custom Fields(ACF)** option of the **Ninja Tables** plugin.
