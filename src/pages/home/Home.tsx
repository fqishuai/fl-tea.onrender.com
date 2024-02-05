import { useState } from 'react';
import { axiosInstance } from 'src/api';

export default function Home() {
  const [content, setContent] = useState<string | null>(null);
  async function getData() {
    try {
      const response = await axiosInstance.get('todo');
      console.log(response);
      if (response.data?.success) setContent(response.data?.data?.content);
    } catch (error: any) {
      if (error && error.response) console.error(error.response.data);
    }
  }

  return <div className="home-wrapper">
    <div>首页</div>
    <div onClick={getData}>获取数据</div>
    { content }
  </div>
}