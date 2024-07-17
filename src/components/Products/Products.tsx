import React, { useEffect } from 'react'
import { fetchProducts } from '../../redux/reducers/ProductsSlice'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { Backdrop, Box, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useGetAllProductsQuery } from './productsAPI';
import SearchIcon from "@mui/icons-material/Search";
import { addToCart } from '../../redux/reducers/CartSlice';


const Products = () => {
  // Get the data from the state - 
  const {items} = useSelector((state:RootState)=> state.products)
  console.log(items,'lll');
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    dispatch(fetchProducts());
  },[])

  const handleAddToCart = (product:any)=> {
    console.log(product);
    dispatch(addToCart(product));
    // When user clicks on the addToCart Button..this product which we are passing as an argument here..will be added as action.payload in the cartSlice i.e basically in the state..ultimately
    
  }

  return (
    <Box sx={{ backgroundColor: "#f2f2f2", minWidth: "415px" }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        // background: `url(${ProductBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          fontFamily: "Poppins",
          color: "#000",
          mt: 1,
        }}
      >
        Delicious Food for you{" "}
      </Typography>
      <TextField
        sx={{
          backgroundColor: "#ebeaea",
          p: 1,
          mt: 2,
          width: "50%",
          borderRadius: "30px",
          "& fieldset": { border: "none" },
        }}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#000", mr: 2 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {/* <SearchIcon sx={{ color: "#000" }} /> */}
              <Button
                variant="contained"
                sx={{
                  height: "72px",
                  borderRadius: "0px 30px 30px 0px",
                  mr: -3,
                  color: "#fff",
                  fontWeight: 700,
                  backgroundColor: "#FA4A0C",
                  "&:hover": {backgroundColor: '#FA2A0C',color:'#fff'}
                }}
              >
                Search
              </Button>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        placeholder="Search"
      />
    </Box>
    {/* <Button onClick={handleOpenBackDrop}>Show backdrop</Button> */}
   
      <Container>
        <Grid
          container
          rowSpacing={10}
          columnSpacing={4}
          sx={{ pt: 13, pb: 5 }}
        >
          {items.map((item:any, index) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ textAlign: "center" }}
            >
              <Paper
                elevation={3}
                key={index}
                sx={{
                  borderRadius: "20px",
                  width: "100%",
                }}
              >
                 <Typography sx={{ fontSize: "1.3rem" }}>
                  {item.title}
                </Typography>
                <img
                  src={item.images[0]}
                  alt={item.description}
                  height={140}
                  style={{
                    // position: "relative",
                    // top: "-50px",
                    borderRadius: "50%",
                  }}
                />
                {/* <Typography sx={{ fontSize: "1.3rem" }}>
                  {item.description}
                </Typography> */}
                <Typography
                  sx={{
                    p: 2,
                    color: "#FA4A0C",
                    fontWeight: 600,
                    fontSize: "20px",
                    fontFamily: "Poppins",
                  }}
                >
                  {/* Rs {item.idMeal} */}
                </Typography>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center', gap:1,pb:2}}>
                  <Typography>Quantity</Typography>
                  <IconButton >-</IconButton>
                  <Typography>Qunatity</Typography>
                  <IconButton >+</IconButton>
                  {/* <Button variant="contained">+</Button> */}
                  {/* <Button sx={{ backgroundColor:'#FA4A0C',fontWeight:700}} variant="contained">Add to Cart</Button> */}
                </Box>
                <Button sx={{mt:1, mb:2, backgroundColor:'#FA4A0C',fontWeight:700}} variant="contained" onClick={()=> handleAddToCart(item)}>Add to Cart</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    {/* {timePassIsLoading ? (<CircularProgress  sx={{ml:3, color: '#FA4A0C',fontSize:'25px',zIndex:1,display:'flex',alignItems:'center',justifyContent:'center'}} />): ( <Container>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={4}
        sx={{ pt: 13, pb: 5 }}
      >
        {product.map((prod, index) => (
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <Paper
              elevation={3}
              key={index}
              sx={{
                borderRadius: "20px",
                width: "100%",
              }}
            >
              <img
                src={prod.strMealThumb}
                alt={prod.strMeal}
                height={140}
                style={{
                  position: "relative",
                  top: "-50px",
                  borderRadius: "50%",
                }}
              />
              <Typography sx={{ fontSize: "1.3rem" }}>
                {prod.strMeal}
              </Typography>
              <Typography
                sx={{
                  p: 2,
                  color: "#FA4A0C",
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "Poppins",
                }}
              >
                Rs {prod.idMeal}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>)} */}
  </Box>
  )
}

export default Products