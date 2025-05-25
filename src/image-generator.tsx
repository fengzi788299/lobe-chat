import { useState } from 'react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
  setImageUrl(imageUrl);
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">文生图（AI生成图片）</h1>
      <input
        type="text"
        placeholder="请输入图片描述"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={generateImage} className="bg-blue-600 text-white px-4 py-2 rounded">
        生成图片
      </button>
      {imageUrl && (
        <div className="mt-6">
          <img src={imageUrl} alt="生成的图片" className="rounded" />
        </div>
      )}
    </div>
  );
}
