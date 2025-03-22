<script lang="ts">
</script>

<!-- MarkUp -->
<div>
  <!-- Header Navigation --> 
  <header class="w-full p y-4 px-6 bg-white">
    <div class="container mx-auto flex justify-between items-center">
      <span class="text-2xl font-bold text-blue-500">APP</span>
      <nav class="hidden md:flex space-x-8">
        <a href="/about" class="text-gray-700 hover:text-blue-500">About</a>
        <a href="#faq" class="text-gray-700 hover:text-blue-500">FAQ</a>
      </nav>
      <div class="flex space-x-4">
        <a href="#trial" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-medium">無料トライアル</a>
        <a href="#pricing" class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-full font-medium">料金表を見る</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="w-full bg-blue-50 py-12 md:py-24">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Home
        </h1>
        <p class="text-lg md:text-xl mb-2">full-stack </p>
        <p class="text-lg md:text-xl mb-8">Typescript</p>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#trial" class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-center">無料トライアルを始める</a>
          <a href="#pricing" class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-medium text-center">料金表を見る</a>
        </div>
      </div>
      <div class="w-full md:w-1/2">
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="w-full py-16">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-12">主な機能</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">機能１</h3>
          <p>〇〇〇</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">機能２</h3>
          <p>〇〇〇</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">機能３</h3>
          <p>〇〇〇</p>
        </div>
      </div>
    </div>
  </section>  

  <!-- Footer -->
  <footer class="w-full py-8 bg-gray-800 text-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 pb-24 md:mb-0">
          <h2 class="text-2xl font-bold text-blue-300 mb-4">APP</h2>
          <p class="text-gray-400">〇〇 APP</p>
        </div>

      </div>
    </div>
  </footer>
  
</div>

<style>
</style>
