import { useState, useEffect } from 'react';
import client from '../../../app/config/apollo';
import { query } from '../graphql';

const useCategory = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setsubCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.categories,
      });
      setCategories(res.data.categories);
      setLoading(false);
    } catch (error) {

    }
  };
  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.subCategories,
      });
      setsubCategories(res.data.subCategories);
      setLoading(false);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  const subCategoriesMapped = subCategories.map(subCategory => ({
    id: subCategory.id,
    label: subCategory.name[0].toUpperCase() + subCategory.name.slice(1),
    value: subCategory.name,
    category: subCategory.category,
  }));

  const categoriesMapped = categories.map(category => ({
    label: category.name[0].toUpperCase() + category.name.slice(1),
    value: category.name,
    children: subCategoriesMapped.filter(
      subCategory => subCategory.category.id === category.id,
    ),
  }));

  return [loading, categoriesMapped, categories, subCategories];
};

const useSellers = () => {
  const [loading, setLoading] = useState(false);
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.selllers,
      });
      setSellers(res.data.sellers);
      setLoading(false);
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const sellersMapped = sellers.map(seller => ({
    label: `${seller.user.name}(${seller.shopName})`,
    value: seller.id,
  }));

  return [loading, sellersMapped, sellers];
};

export { useCategory, useSellers };
