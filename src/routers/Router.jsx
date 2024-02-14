import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/admin_screens/Dashboard/Dashboard";
import AdminUsers from "../components/admin_screens/Dashboard/Users";
import AdminCustomers from "../components/admin_screens/Dashboard/Customers";
import AdminFoodCategories from "../components/admin_screens/Dashboard/FoodCategories";
import AdminFoodIngredients from "../components/admin_screens/Dashboard/FoodIngredients";
import AdminFoodModifiers from "../components/admin_screens/Dashboard/FoodModifiers";
import AdminFoodItems from "../components/admin_screens/Dashboard/FoodItems";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/customers" element={<AdminCustomers />} />
      <Route path="/admin/food_categories" element={<AdminFoodCategories />} />
      <Route path="/admin/food_ingredients" element={<AdminFoodIngredients />} />
      <Route path="/admin/food_modifiers" element={<AdminFoodModifiers />} />
      <Route path="/admin/food_items" element={<AdminFoodItems />} />
    </Routes>
  )
}

export default Router