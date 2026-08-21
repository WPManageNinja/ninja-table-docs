---
title: "Frontend Editing"
description: "Frontend Editing"
---

# Frontend Editing

Ninja Tables always offers fantastic features for its users, and one of them is the **Frontend Editing** feature.

This functionality allows you to retrieve user data and edit the table data from the frontend. It also enables you to allow the user by role. This means that, in addition to some more possibilities, you can allow any specific user role to update or add data to your table.

Let's dive into this guide which will demonstrate how to apply Frontend Editing on your Ninja Tables.

- With this feature, the user of this table will get some options, such as adding / editing or changing their own frontend data.
- It is quite simple to implement this feature. Two options need to be configured in the Frontend Editing.
- The first one is to set the **user role**, who can add/edit/delete data. And then set up the **editable columns**.

## **Enabling Frontend Editing**

- First, go to the Ninja Tables **dashboard** and click on the **Frontend Editing** tab. 

![Enable Frontend Editing](/images/advanced-features/frontend-editing/1.-Enable-Frontend-Editing-1.webp)

- After enabling the frontend editing, a bunch of options will appear on this page.

![Frontend Settings](/images/advanced-features/frontend-editing/2.-Enable-Frontend-Editing-2.webp)

### **User Role Permission**

- Data editing permission is the first option in the settings. Here you will find some user roles to edit/add on the left side.

- In the example given below, by checking both the left & right checkboxes, only the Author is allowed to edit and delete the table data. Multiple users can be allowed permission if you want.

> [!Note]
> Data permission also applies to **public users** — visitors who are not logged in — on tables rendered with **DataTables**. Grant it only when you intend the table to be editable by anyone who can reach the page.

![Data Editing Permission](/images/advanced-features/frontend-editing/3.-Enable-Frontend-Editing-3.webp)

### **Own Data Only**

- If this feature is selected, then users cannot edit/delete **other users’** data. Only their own data can be edited.

- You'll get a new **shortcode** for this table when you allow this 'Users can see and edit/delete only their own data' permission.

![Own Data Only](/images/advanced-features/frontend-editing/4.-Own-Data-Only.webp)

Instead of using the standard table shortcode, use the **following shortcode** to display all the data without displaying **Editing tools** to all users.

```
[ninja_tables disable_edit="yes" id="264"]
```

### **Editing Column Options**

The user roles have already been set up. Then the column that can be editable needs to be set.

- We can select which column data to edit from the editing column options. And select the required along with the default value too. All the settings are completed; now you just need to update the settings.

![Editing Column Options](/images/advanced-features/frontend-editing/5.-EDitable-Column.webp)

- So, now the table’s frontend is editable for the authors. In this case, just the authors can edit the table info from the frontend. But the other users cannot view the editable options.

## **Few optional settings of the Frontend Editing table**

From the **Appearance Settings,** we can add some styling to our table.

#### **Always show edit icons**

- Enabling this option, lets you display the edit button beside the row on the frontend all the time.

![Appearance Settings](/images/advanced-features/frontend-editing/6.-Appearance-Settings.webp)

## Frontend Editing Example

![frontend editing in wordpress tables](/images/advanced-features/frontend-editing/7.-frontend-edit-1.webp)

Note that, Only the Default table (manually created tables or constructed tables by importing CSV file) can be editable. All the other tables where table data are coming from other sources are restricted for front-end editing.
