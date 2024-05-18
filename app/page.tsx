'use client'

import {useState, useEffect} from 'react';
import axios from 'axios';

import {IPortfolioItem} from '@/types';

import Navbar from '@/components/home/Navbar';
import Header from '@/components/home/Header';
import About from '@/components/home/About';
import PortfolioList from '@/components/home/PortfolioList';
import Footer from '@/components/home/Footer';

export default function Home() {
  const [itemList, setItemList] = useState<IPortfolioItem[]>([])

  async function getProjects() {
    try {
      const response = await axios.get('http://localhost:3000/api/projects');
      setItemList(response.data);
    } catch (e) {
      console.log(e);
    }
  }  

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <PortfolioList itemList={itemList}/>
      <Footer/>
    </>
  )
}
