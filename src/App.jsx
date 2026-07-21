import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './presentation/views/layout/MainLayout'
import HomePage from './presentation/views/home/HomePage'
import AboutPage from './presentation/views/about/AboutPage'
import CategoriesPage from './presentation/views/categories/CategoriesPage'
import {
  CategoryDetailPage,
  SubcategoryPage,
} from './presentation/views/categories/CategoryDetailPage'
import AccoladesPage from './presentation/views/accolades/AccoladesPage'
import BlogsPage from './presentation/views/blogs/BlogsPage'
import NewsPage from './presentation/views/news/NewsPage'
import CertificationsPage from './presentation/views/certifications/CertificationsPage'
import CareersPage from './presentation/views/careers/CareersPage'
import ContactPage from './presentation/views/contact/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categorySlug" element={<CategoryDetailPage />} />
          <Route
            path="categories/:categorySlug/:subSlug"
            element={<SubcategoryPage />}
          />
          <Route path="accolades" element={<AccoladesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
