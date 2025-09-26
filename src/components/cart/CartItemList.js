const CartItemList = ({ name, quantity, pricePerOne, onDelete }) => {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "12px",
        borderRadius: "6px",
        background: "#f9f9f9", // biar ada kontras lembut
      }}>
      {/* Header kolom */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "6px" }}>
        <div style={{ flex: 2, fontWeight: "bold" }}>Makanan / Food</div>
        <div style={{ flex: 1, fontWeight: "bold", textAlign: "center" }}>
          Qty
        </div>
        <div style={{ flex: 1, fontWeight: "bold", textAlign: "right" }}>
          Harga
        </div>
      </div>

      {/* Isi item */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Kolom Nama + Tombol X */}
        <div
          style={{
            flex: 2,
            padding: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
          {/* Tombol bulat X */}
          <button
            onClick={onDelete}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1px solid #000",
              background: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}>
            X
          </button>

          {/* Nama makanan */}
          <span style={{ fontWeight: "bold" }}>{name}</span>
        </div>

        {/* Kolom Qty */}
        <div
          style={{
            flex: 1,
            padding: "8px",
            textAlign: "center",
          }}>
          {quantity}
        </div>

        {/* Kolom Harga */}
        <div
          style={{
            flex: 1,
            padding: "8px",
            textAlign: "right",
            fontWeight: "bold",
          }}>
          Rp {(pricePerOne * quantity).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
