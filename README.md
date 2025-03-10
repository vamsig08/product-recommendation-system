## This is a  AI-Powered Product Recommendation System with RAG

## How to Run the Prototype:

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vamsig08/product-recommendation-system.git
   cd product-recommendation-system 
2. **Backend Setup**:
   ```bash
     cd backend
     npm install
     npm start
3. **Frontend Setup**:
   ```bash
    cd ../frontend
    npm install
    npm start
4. Enter desired effects for recommendations

## Approach:
  Since the mock data had product description and their effects, content-based filtering felt like the best approach. 
   How it works is:
   
     *The user inputs the effects they are looking for. 
     *Backend goes through product dataset pulls out product that matches that keyword.
     *I used units_sold field from the sales data to rank them in order of most popular. 
     *And then it sends the top recommended to the frontend for user to see.

  For RAG, the dataset came with ingredient properties which I used to tag the products first ingredient to match its effects. For example "Contains Coffee Beans, which has Rich flavor; provides a natural energy boost."  How it works:
  
     *For each recommended product, I grabbed the properties of the first ingredient from the knowledge base.
     *I concatenated those properties to its original description using plain string manipulation.
     *Implementing a LLM is also another approach but since the dataset is small and that I am building just a prototype, I wanted to keep it simple. My goal was to keep the system functional and easy to understand.

## Areas for improvement:
1. **Utilizing real time datasets, with more products for more options and diversity.**
2. **Implementing collaborative filtering which is a more common recommendation algorithm, very popular.**
3. **Using LLMs for RAG implementation as I mentioned before, it provides a better grammar making descriptions sound more polished and contextualized.**
4. **For this protoype, I built a straightforward user interface using React. The current UI meets the users needs, but its not visually appealing.**
  
    

   
